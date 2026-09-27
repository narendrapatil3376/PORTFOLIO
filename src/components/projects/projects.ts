import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  Project
} from '../../model/Portfolio.model';

import {
  ProjectServices
} from '../../services/ProjectServices';


const ICON_MAP: Record<string, string> = {

  mobile: '📱',

  network: '🖧',

  ticket: '🎫'

};


@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [],

  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  projects: Project[] = [];

  loading = true;

  error = false;


  constructor(
    private projectServices: ProjectServices,

    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    this.projectServices
      .getProjects()
      .subscribe({

        next: (res: Project[]) => {

          console.log(
            'Projects:',
            res
          );

          this.projects = res;

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (err) => {

          console.error(
            'Failed to load Projects:',
            err
          );

          this.error = true;

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }


  iconFor(icon: string): string {

    return ICON_MAP[icon] ?? '🚀';

  }

}