import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from './house';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  readonly baseUrl ="https://estate-sage.vercel.app/api"
  constructor(private http: HttpClient) { }
  houseSubject$ = Subject<Property>;

  getallProperties() {
    return this.http.get<Property[]>(`${this.baseUrl}/properties`)
  }



}
