import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import {CountriesService} from "../../service/countries/countries.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-post-info-user-content',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatSlideToggle,
    MatCheckbox,
    NgForOf,
    FormsModule,
    NgIf,
  ],
  templateUrl: './create-post-info-user-content.component.html',
  styleUrl: './create-post-info-user-content.component.css'
})
export class CreatePostInfoUserContentComponent implements OnInit{

  countries: any[]= []
  departments: any[]=[]
  cities: string[]=[]

  selectedCountry: string = ''
  selectedDepartments: string = ''

  constructor(private countriesService: CountriesService) {

  }


  ngOnInit() {
    this.getAllCountries()
  }

  getAllCountries(){
    this.countriesService.getCountries().subscribe((res:any)=>{
      this.countries = res
    })

  }

  onCountrySelectionChange(){
    this.departments = ['']
    const selectedCountryObj = this.countries.find(c => c.country === this.selectedCountry);
    this.departments = selectedCountryObj.departments;

  }
  onCitiesSelectionChange(){
    this.cities = ['']
    const selectedDepartmentObj = this.departments.find(c => c.name === this.selectedDepartments);
    this.cities = selectedDepartmentObj.cities;
  }


}
