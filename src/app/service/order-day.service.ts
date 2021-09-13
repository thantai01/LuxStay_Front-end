import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {OrderDay} from '../model/order-day';

const ORDER_DAY_API = environment.API_SERVER + '/apartment-day-in-orders';

@Injectable({
  providedIn: 'root'
})
export class OrderDayService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<OrderDay[]>(ORDER_DAY_API );
  }
  findAllDayInOrderByApartment(apartmentId: number): Observable<OrderDay[]> {
    return this.http.get<OrderDay[]>(ORDER_DAY_API + '/findAllByApartment/' + apartmentId);
  }
}
