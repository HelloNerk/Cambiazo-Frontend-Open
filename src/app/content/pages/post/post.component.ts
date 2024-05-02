import { Component } from '@angular/core';
import {
  CreatePostInfoUserContentComponent
} from "../../components/create-post-info-user-content/create-post-info-user-content.component";
import {
  CreateInfoPostContentComponent
} from "../../components/create-info-post-content/create-info-post-content.component";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CreatePostInfoUserContentComponent,
    CreateInfoPostContentComponent,
    MatFormField,
    MatIcon,
    MatInput,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  protected readonly toppings = FormGroup;
}
