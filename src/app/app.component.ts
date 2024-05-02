import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterContentComponent} from "./public/footer-content/footer-content.component";
import {HeaderContentComponent} from "./public/header-content/header-content.component";
import { Router, NavigationEnd } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterContentComponent, HeaderContentComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cambiazo';

  showNavFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavFooter = !(event.url === '/login'|| event.url === '/register'|| event.url.startsWith('/admin'));
      }
    });

  }
}
