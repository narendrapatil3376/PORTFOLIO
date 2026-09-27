import { Routes } from '@angular/router';

import { Home } from '../components/home/home';
import { Projects } from '../components/projects/projects';
import { About } from '../components/about/about';
import { Skills } from '../components/skills/skills';
import { Experience } from '../components/experience/experience';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'skills',
    component: Skills
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'experience',
    component: Experience
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'projects',
    component: Projects
  },

  {
    path: '**',
    redirectTo: ''
  }

];