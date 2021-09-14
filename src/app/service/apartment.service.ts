import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Apartment} from '../model/apartment';
import {environment} from '../../environments/environment';

const APARTMENT_API = environment.API_SERVER;

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<any> {
    return this.httpClient.get<Apartment[]>(APARTMENT_API + '/apartments');
  }
  findById(id: number): Observable<any> {
    return this.httpClient.get<Apartment>(`${APARTMENT_API}/apartments/${id}`);
  }
  save(apartment): Observable<Apartment> {
    return this.httpClient.post<Apartment>(APARTMENT_API + '/apartments', apartment);
  }
  edit(id: number, apartment: Apartment): Observable<Apartment> {
    return this.httpClient.put<Apartment>(`${APARTMENT_API}/apartments/${id}`, apartment);
  }
  delete(id: number): Observable<Apartment> {
    return this.httpClient.delete<Apartment>(`${APARTMENT_API}/apartments/${id}`);
  }
  findAllByUser(id: number): Observable<Apartment[]>{
    return this.httpClient.get<any>(`${APARTMENT_API}/apartments/findAllByUserId/${id}`);
  }
  find8Newest(): Observable<Apartment[]> {
    return this.httpClient.get<any>(APARTMENT_API + '/apartments/newest-apartments');
  }
  searchAll(value?: string, typeID?: string, price1?: string, price2?: string): Observable<Apartment[]> {
    let params = new HttpParams()
      .set('value', value)
      .set('typeID', typeID)
      .set('price1', price1)
      .set('price2', price2);
    // @ts-ignore
    return this.httpClient.get<Apartment []> (APARTMENT_API + '/apartments/search-all' , {params});
  }
}
