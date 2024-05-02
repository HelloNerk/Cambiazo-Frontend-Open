import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {
  CrudProductCategoriesComponent
} from "../../components/crud-product-categories/crud-product-categories.component";

@Component({
  selector: 'app-products-categories-admin',
  standalone: true,
  imports: [
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    RouterLink,
    CrudProductCategoriesComponent
  ],
  templateUrl: './products-categories-admin.component.html',
  styleUrl: './products-categories-admin.component.css'
})
export class ProductsCategoriesAdminComponent {

}
