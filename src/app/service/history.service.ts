import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Apartment} from "../model/apartment";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }
  getApartmentHistory(id: number): Observable<Apartment> [] {
    // @ts-ignore
    return this.http.get<Apartment []>('http://localhost:8080/history/' + id);
  }
}
