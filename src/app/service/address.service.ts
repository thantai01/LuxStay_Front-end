import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Apartment} from '../model/apartment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }
  getAllProvince(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.PROVINCE_API);
  }
  // getAllDistrictByProvinceId(): Observable<any[]> {
  //   if (this.httpClient.get<any[]>(environment.DISTRICT_API).subscribe(data => )) {
  //
  // //   }
  // }
  getAllDistrict(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.DISTRICT_API);
  }
  getAllWard(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.WARD_API);
  }
}
