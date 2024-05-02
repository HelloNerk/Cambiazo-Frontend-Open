import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  /******************* Products **************************/
  getProducs():Observable<any>{
    return this.http.get(`${this.baseUrl}/products`)
  }
  postProduct(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/products`,data)
  }
  deleteProduct(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/products/${id}`)
  }
  putProduct(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/products/${id}`,data)
  }
  getProductById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/products/${id}`)
  }


  /******************* Products Categories **********************/
  getCategoriesProducts():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories-objects`)
  }
  postCategoryProduct(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/categories-objects`,data)
  }
  deleteCategoryProduct(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/categories-objects/${id}`)
  }
  putCategoryProduct(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/categories-objects/${id}`,data)
  }
  getCategoryProductById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/categories-objects/${id}`)
  }
}

