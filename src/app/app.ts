import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../components/header/header';
import { FooterComponent } from '../components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    Header,
    FooterComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  logoText = 'Naren[dev]';

}