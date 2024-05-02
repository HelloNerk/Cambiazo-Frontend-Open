import {Component, OnInit} from '@angular/core';
import {MatTableModule,MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MembershipsService} from "../../../content/service/memberships/memberships.service";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-crud-memberships',
  standalone: true,
  imports: [
    MatTableModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './crud-memberships.component.html',
  styleUrl: './crud-memberships.component.css'
})
export class CrudMembershipsComponent implements OnInit{
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','name','price','description','benefits','actions']

  constructor(private membershipService: MembershipsService,private dialogMembership: MatDialog) {
  }

  ngOnInit() {
    this.getAllMembership()
  }

  getAllMembership(){
    this.membershipService.getMemberships().subscribe((res:any)=>{
      this.dataSource = res
    })
  }


  deleteMembership(id:string){
    this.membershipService.deleteMemberships(id).subscribe()
  }

  editMembership(id:string){
    //this.dialogMembership.open(DialogOngsCategoriesComponent,{data: id})
  }
  addMembership(){
    //this.dialogMembership.open(DialogOngsCategoriesComponent)
  }
}
