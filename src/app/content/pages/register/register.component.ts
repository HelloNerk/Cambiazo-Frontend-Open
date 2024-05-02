import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FooterContent2Component} from "../../../public/footer-content-2/footer-content-2.component";
import {MatLabel} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {RouterLinkActive} from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    FooterContent2Component,
    MatLabel,
    MatButtonModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor() {
    this.register()
  }

  register(){

  }
}
