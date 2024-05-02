import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl= environment.baseUrl;
  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(`${this.baseUrl}/country`)
  }

}
