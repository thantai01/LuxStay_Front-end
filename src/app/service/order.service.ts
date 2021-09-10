import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const ORDER_API = environment.API_SERVER + '/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  booking(order: Order): Observable<any> {
    return this.http.post(ORDER_API, order);
  }
  getOrderOfUser(idUser: number): Observable<Order []> {
    return this.http.get<Order []>(ORDER_API + idUser);
  }
}
