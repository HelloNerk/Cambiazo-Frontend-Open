import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {OngsService} from "../../service/ongs/ongs.service";
import {Ongs} from "../../model/ongs/ongs.model";

@Component({
  selector: 'app-search-ongs',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInputModule,
    MatCardModule,
    NgForOf,
    MatButton,
    NgIf
  ],
  templateUrl: './search-ongs.component.html',
  styleUrl: './search-ongs.component.css'
})
export class SearchOngsComponent implements OnInit{
  ongsSearched: string = ""
  items:Ongs[]=[]

  constructor(private ongsService:OngsService) {
  }
  ngOnInit() {

    this.ongsService.getOngs().subscribe((res:any)=>
    { this.items = res},error => console.log(error))
  }

  searchOngs(event:Event){
    this.ongsSearched = (event.target as HTMLInputElement).value.trim()
    this.ongsService.getOngs().subscribe((res:any)=>
    { this.items = res.filter((ongs:Ongs)=>{
      const ongsNameNormalized = ongs.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return ongsNameNormalized.includes(this.ongsSearched) || this.ongsSearched == '';

    })},error => console.log(error))

  }


}
