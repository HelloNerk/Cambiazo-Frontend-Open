import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getMemberships(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/memberships`)
  }
  postMemberships(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/memberships`,data)
  }
  deleteMemberships(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/memberships/${id}`)
  }
  putMemberships(id:string,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/memberships/${id}`,data)
  }
  getMembershipsById(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/memberships/${id}`)
  }
}
