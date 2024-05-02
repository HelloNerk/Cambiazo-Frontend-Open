import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import { CommonModule } from '@angular/common';
import {FeaturePostsContentComponent} from "../feature-posts-content/feature-posts-content.component";
import {PostsService} from "../../service/posts/posts.service";
import {MatIcon} from "@angular/material/icon";
import {Products} from "../../model/products/products.model";
@Component({
  selector: 'app-lates-posts-content',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    FeaturePostsContentComponent,
    MatIcon
  ],
  templateUrl: './lates-posts-content.component.html',
  styleUrl: './lates-posts-content.component.css'
})
export class LatesPostsContentComponent implements OnInit{
  items:Products[]= []

  constructor(private postPervice:PostsService) {
  }
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts(){
    this.postPervice.getProducs().subscribe((res:any)=>{
      this.items = res
      console.log(res)
    })
  }
}
