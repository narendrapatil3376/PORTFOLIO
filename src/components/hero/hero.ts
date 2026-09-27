import { Component, Input } from '@angular/core';

import { UpperCasePipe } from '@angular/common';

import { Router } from '@angular/router';

import {
  HeroStat,
  Profile
} from '../../model/Portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,

  imports: [
    UpperCasePipe
  ],

  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  @Input()
  profile!: Profile;

  @Input()
  stats: HeroStat[] = [];

  constructor(
    private router: Router
  ) {}

  exploreProjects(): void {

    this.router.navigate([
      '/projects'
    ]);

  }

}