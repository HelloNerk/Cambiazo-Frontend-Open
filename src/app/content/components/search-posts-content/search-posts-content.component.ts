import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {PostsService} from "../../service/posts/posts.service";
import {NgForOf} from "@angular/common";
import {ThemePalette} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import {CategoriesObjects} from "../../model/categories-objects/categories-objects.model";
@Component({
  selector: 'app-search-posts-content',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, NgForOf, MatButton],
  templateUrl: './search-posts-content.component.html',
  styleUrl: './search-posts-content.component.css'
})
export class SearchPostsContentComponent implements OnInit{

  color: ThemePalette
  categories: CategoriesObjects[] = [];

  constructor(private postsService:PostsService) {
  }

  ngOnInit() {
    this.getAllProductsCategories()
  }

  getAllProductsCategories(){
    this.postsService.getCategoriesProducts().subscribe((response:any)=>{
      this.categories = response
      console.log(this.categories)
    })
  }


}
