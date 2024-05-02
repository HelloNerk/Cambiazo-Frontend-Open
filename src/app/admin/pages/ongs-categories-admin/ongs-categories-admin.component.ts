import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CrudOngsCategoriesComponent} from "../../components/crud-ongs-categories/crud-ongs-categories.component";

@Component({
  selector: 'app-ongs-categories-admin',
  standalone: true,
  imports: [
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    RouterLink,
    CrudOngsCategoriesComponent
  ],
  templateUrl: './ongs-categories-admin.component.html',
  styleUrl: './ongs-categories-admin.component.css'
})
export class OngsCategoriesAdminComponent {

}
