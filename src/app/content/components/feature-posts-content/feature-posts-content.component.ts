import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {PostsService} from "../../service/posts/posts.service";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Products} from "../../model/products/products.model";
@Component({
  selector: 'app-feature-posts-content',
  standalone: true,
  imports: [MatCardModule, NgForOf, NgIf, MatButton, MatIcon],
  templateUrl: './feature-posts-content.component.html',
  styleUrl: './feature-posts-content.component.css'
})
export class FeaturePostsContentComponent implements OnInit{
  items:Products[]=[]

  constructor(private postsService:PostsService) {
  }
  ngOnInit() {
    this.getAllFeaturePosts()
  }

  getAllFeaturePosts(){
    this.postsService.getProducs().subscribe((res:any)=>{
      this.items = res
    })
  }
}
