import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OngsService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  /********************* ONGs **************************/

  getOngs():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/ongs`)
  }
  postOng(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/ongs`,data)
  }
  deleteOng(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/ongs/${id}`)
  }
  putOng(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/ongs/${id}`,data)
  }
  getOngById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/ongs/${id}`)
  }

  /***************** ONGs Categories **************************/

  getCategoriesOngs():Observable<any>{
    return this.http.get(`${this.baseUrl}/categories-ongs`)
  }

  postCategoryOng(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/categories-ongs`,data)
  }
  deleteCategoryOng(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/categories-ongs/${id}`)
  }
  putCategoryOng(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/categories-ongs/${id}`,data)
  }
  getCategoryOngById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/categories-ongs/${id}`)
  }
}
