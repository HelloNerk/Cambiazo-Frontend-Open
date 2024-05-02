import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterModule} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawerContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatDrawerContainer,
    MatSidenavModule
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

  constructor(private router:Router) {}


  createPost(){
    this.router.navigateByUrl('home/post');
  }

}
