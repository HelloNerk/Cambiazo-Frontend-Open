import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {PostsService} from "../../../content/service/posts/posts.service";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DialogProductCategoriesComponent} from "../dialog-product-categories/dialog-product-categories.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-crud-product-categories',
  standalone: true,
  imports: [MatPaginator, MatTableModule, MatIcon,MatButtonModule],
  templateUrl: './crud-product-categories.component.html',
  styleUrl: './crud-product-categories.component.css'
})
export class CrudProductCategoriesComponent implements OnInit{
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','name','actions']

  constructor(private postService: PostsService,private dialogProductCategory: MatDialog) {
  }

  ngOnInit() {
    this.getAllProductCategories()
  }

  getAllProductCategories(){
    this.postService.getCategoriesProducts().subscribe((res:any)=>{
      this.dataSource = res
    })
  }

  editCategory(id:string){
    this.dialogProductCategory.open(DialogProductCategoriesComponent,{data: id})
  }

  deleteCategory(id:string){
    this.postService.deleteCategoryProduct(id).subscribe()
  }

  addProductCategory(){
    this.dialogProductCategory.open(DialogProductCategoriesComponent)
  }
}
