import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`)
  }
  postUser(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/users`,data)
  }
  deleteUser(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
  putUser(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/users/${id}`,data)
  }
  getUserById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/users/${id}`)
  }
}
