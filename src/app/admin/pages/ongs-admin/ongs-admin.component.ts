import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CrudOngsComponent} from "../../components/crud-ongs/crud-ongs.component";

@Component({
  selector: 'app-ongs-admin',
  standalone: true,
  imports: [
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    RouterLink,
    CrudOngsComponent
  ],
  templateUrl: './ongs-admin.component.html',
  styleUrl: './ongs-admin.component.css'
})
export class OngsAdminComponent {

}
