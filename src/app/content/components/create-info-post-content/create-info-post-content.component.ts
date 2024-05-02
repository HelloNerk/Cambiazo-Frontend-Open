import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {NgForOf} from "@angular/common";
import {PostsService} from "../../service/posts/posts.service";
import {CategoriesObjects} from "../../model/categories-objects/categories-objects.model";
@Component({
  selector: 'app-create-info-post-content',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
    MatOption,
    MatSlideToggle,
    NgForOf,
  ],
  templateUrl: './create-info-post-content.component.html',
  styleUrl: './create-info-post-content.component.css'
})
export class CreateInfoPostContentComponent implements OnInit{

  categories: CategoriesObjects[]=[]

  constructor(private postService:PostsService) {
  }

  ngOnInit() {
    this.getCategoriesPostOptions()
  }

  getCategoriesPostOptions(){
    this.postService.getCategoriesProducts().subscribe((res:any)=> {
        this.categories = res
      },error => console.log(error)
    )};
}
