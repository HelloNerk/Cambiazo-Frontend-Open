import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf} from "@angular/common";
import {MembershipsService} from "../../service/memberships/memberships.service";
import {Memberships} from "../../model/memberships/memberships.model";

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.css'
})
export class MembershipsComponent implements OnInit{

  memberships: Memberships[] = []

  constructor(private membershipsService:MembershipsService) {
  }


  ngOnInit() {
    this.getMemberAllMemberships()
  }

  getMemberAllMemberships() {
    this.membershipsService.getMemberships().subscribe(
      (res:any)=> {
        this.memberships = res
      },error => console.log(error)
    )
  }
}
