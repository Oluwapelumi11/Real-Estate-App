import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Property } from './house';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private baseUrl ="https://estate-sage.vercel.app/api/properties"
  constructor(private http: HttpClient) { }
  private houseSubject$ = new BehaviorSubject<Property[]>([]);

  private properties: Property[] = [];
  property$: Observable<Property[]>= this.houseSubject$.asObservable();
  getallProperties() {
    this.http.get<Property[]>(this.baseUrl).pipe(
      tap((data:Property[]) => {
        this.houseSubject$.next(data)
        this.properties = data; 
      }) 
      
    ).subscribe();
  }

  getPropertyById(id: number): Property | undefined {
    return this.properties.find(property => property.id === id);
  }


}
