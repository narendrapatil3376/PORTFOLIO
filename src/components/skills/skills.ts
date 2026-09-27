import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  SkillCategory
} from '../../model/Portfolio.model';

import {
  PortfolioService
} from '../../services/PortfolioService';


const ICON_MAP: Record<string, string> = {

  code: '🖥️',

  shield: '🔐',

  atom: '⚛️',

  lock: '🔒',

  cloud: '☁️'

};


@Component({
  selector: 'app-skills',
  standalone: true,

  imports: [],

  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {

  categories: SkillCategory[] = [];

  loading = true;

  error = false;


  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    this.portfolioService
      .getSkills()
      .subscribe({

        next: (response: SkillCategory[]) => {

          console.log(
            'Skills:',
            response
          );

          this.categories = response;

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(
            'Failed to load skills:',
            err
          );

          this.error = true;

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }


  iconFor(icon: string): string {

    return ICON_MAP[icon] ?? '✨';

  }

}