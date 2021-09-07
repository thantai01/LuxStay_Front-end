import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apartmenttype} from '../model/apartmenttype';
const API_URL = `${environment.API_SERVER}`;
@Injectable({
  providedIn: 'root'
})
export class ApartmenttypeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Apartmenttype[]> {
    return this.http.get<Apartmenttype[]>(API_URL + '/apartment-types');
  }

  saveApartmentType(apartmentType): Observable<Apartmenttype> {
    return this.http.post<Apartmenttype>(API_URL + '/apartment-types', apartmentType);
  }

  findById(id: number): Observable<Apartmenttype> {
    return this.http.get<Apartmenttype>(`${API_URL}/apartment-types/${id}`);
  }
}
