import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CrudMembershipsComponent} from "../../components/crud-memberships/crud-memberships.component";

@Component({
  selector: 'app-memberships-admin',
  standalone: true,
  imports: [
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    RouterLink,
    CrudMembershipsComponent
  ],
  templateUrl: './memberships-admin.component.html',
  styleUrl: './memberships-admin.component.css'
})
export class MembershipsAdminComponent {

}
