import {Component, OnInit} from '@angular/core';
import { MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {OngsService} from "../../../content/service/ongs/ongs.service";
import {DialogOngsCategoriesComponent} from "../dialog-ongs-categories/dialog-ongs-categories.component";

@Component({
  selector: 'app-crud-ongs-categories',
  standalone: true,
    imports: [
      MatTableModule,
        MatIcon,
        MatIconButton,

    ],
  templateUrl: './crud-ongs-categories.component.html',
  styleUrl: './crud-ongs-categories.component.css'
})
export class CrudOngsCategoriesComponent implements OnInit{
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','name','actions']

  constructor(private ongsService: OngsService,private dialogProductCategory: MatDialog) {
  }

  ngOnInit() {
    this.getAllOngsCategories()
  }

  getAllOngsCategories(){
    this.ongsService.getCategoriesOngs().subscribe((res:any)=>{
      this.dataSource = res
    })
  }

  editCategory(id:string){
    this.dialogProductCategory.open(DialogOngsCategoriesComponent,{data: id})
  }

  deleteCategory(id:string){
    this.ongsService.deleteCategoryOng(id).subscribe()

  }

  addProductCategory(){
    this.dialogProductCategory.open(DialogOngsCategoriesComponent)
  }



}
