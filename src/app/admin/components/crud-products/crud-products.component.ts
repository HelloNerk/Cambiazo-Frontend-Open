import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {PostsService} from "../../../content/service/posts/posts.service";

@Component({
  selector: 'app-crud-products',
  standalone: true,
  imports: [MatPaginator, MatTableModule, MatIcon,MatButtonModule],
  templateUrl: './crud-products.component.html',
  styleUrl: './crud-products.component.css'
})
export class CrudProductsComponent implements OnInit{
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','image','product_name','description','change_for','price','category','boost','location','actions']

  constructor(private postService: PostsService,private dialogProduct: MatDialog) {
  }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts(){
    this.postService.getProducs().subscribe((res:any)=>{
      this.dataSource = res
      console.log(res)
    })
  }

  deleteProduct(id:string){
    this.postService.deleteProduct(id).subscribe()
  }

  editProduct(id:string){
    //this.dialogProduct.open(DialogProductCategoriesComponent,{data: id})
  }
  addProduct(){
    //this.dialogProduct.open(DialogProductCategoriesComponent)

  }
}
