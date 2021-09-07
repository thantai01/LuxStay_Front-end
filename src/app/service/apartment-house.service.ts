import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApartmentHouse} from '../model/apartment-house';
const API_URL = `${environment.API_SERVER}`;
@Injectable({
  providedIn: 'root'
})
export class ApartmentHouseService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ApartmentHouse[]> {
    return this.http.get<ApartmentHouse[]>(API_URL + '/apartments');
  }

  saveApartmentHome(apartmentHome): Observable<ApartmentHouse> {
    return this.http.post<ApartmentHouse>(API_URL + '/apartments', apartmentHome);
  }

  findById(id: number): Observable<ApartmentHouse> {
    return this.http.get<ApartmentHouse>(`${API_URL}/apartments/${id}`);
  }
}
