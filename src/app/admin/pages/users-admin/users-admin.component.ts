import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CrudUsersComponent} from "../../components/crud-users/crud-users.component";

@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    RouterLink,
    CrudUsersComponent
  ],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css'
})
export class UsersAdminComponent {

}
