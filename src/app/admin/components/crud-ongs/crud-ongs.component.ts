import {Component, OnInit} from '@angular/core';
import { MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {OngsService} from "../../../content/service/ongs/ongs.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-crud-ongs',
  standalone: true,
  imports: [
    MatTableModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './crud-ongs.component.html',
  styleUrl: './crud-ongs.component.css'
})
export class CrudOngsComponent implements OnInit{
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','logo','name','type' ,'category','email','contact_number','address','website','actions']

  constructor(private ongsService: OngsService,private dialogOng: MatDialog) {
  }

  ngOnInit() {
    this.getAllOngs()
  }

  getAllOngs(){
    this.ongsService.getOngs().subscribe((res:any)=>{
      this.dataSource = res
    })
  }


  deleteOng(id:string){
    this.ongsService.deleteOng(id).subscribe()
  }

  editOng(id:string){
    //this.dialogOng.open(DialogOngsCategoriesComponent,{data: id})
  }
  addOng(){
    //this.dialogOng.open(DialogOngsCategoriesComponent)
  }

}
