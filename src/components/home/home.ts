import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { forkJoin } from 'rxjs';

import { Hero } from '../hero/hero';

import {
  Profile,
  HeroStat
} from '../../model/Portfolio.model';

import {
  PortfolioService
} from '../../services/PortfolioService';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    Hero
  ],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  profile: Profile | null = null;

  heroStats: HeroStat[] = [];

  loading = true;

  error = false;


  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    forkJoin({

      profile:
        this.portfolioService.getProfile(),

      heroStats:
        this.portfolioService.getHeroStats()

    }).subscribe({

      next: (response) => {

        this.profile = response.profile;

        this.heroStats = response.heroStats;

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(
          'Failed to load portfolio:',
          err
        );

        this.error = true;

        this.loading = false;

        this.cdr.detectChanges();

      }

    });

  }

}