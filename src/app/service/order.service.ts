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
  findAllOrderByUserId(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/' + userId);
  }
  findAllOrderOfApartment(apartmentId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findByApartment/' + apartmentId);
  }
  findAllOrderOfUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findByUser/' + userId);
  }
}
