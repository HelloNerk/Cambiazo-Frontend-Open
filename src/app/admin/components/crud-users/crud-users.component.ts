import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-crud-users',
  standalone: true,
  imports: [MatTableModule,MatIconButton,MatIcon],
  templateUrl: './crud-users.component.html',
  styleUrl: './crud-users.component.css'
})
export class CrudUsersComponent {
  dataSource = new MatTableDataSource()
  displayedColumns = ['id','img','name','email','phone','city','membership','actions']

  constructor(private userService: UsersService,private dialogUser: MatDialog) {
  }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((res:any)=>{
      this.dataSource = res
    })
  }


  deleteUsers(id:string){
    this.userService.deleteUser(id).subscribe()
  }

  editUser(id:string){
    //this.dialogUser.open(DialogProductCategoriesComponent,{data: id})
  }
  addUser(){
    //this.dialogUser.open(DialogProductCategoriesComponent)
  }
}
