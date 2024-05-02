import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports:  [MatSidenavModule, MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  showFiller = false;

}
