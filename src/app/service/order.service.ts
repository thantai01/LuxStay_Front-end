import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Apartment} from '../model/apartment';

const ORDER_API = environment.API_SERVER + '/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  booking(order: Order): Observable<any> {
    return this.http.post(ORDER_API, order);
  }
  // findAllOrderByUserId(userId: number): Observable<Order[]> {
  //   return this.http.get<Order[]>(ORDER_API + '/' + userId);
  // }
  findAllOrderOfApartment(apartmentId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findByApartment/' + apartmentId);
  }
  findAllOrderOfUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findByUser/' + userId);
  }
  findOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(ORDER_API + '/' + orderId);
  }
  edit(id: number, order: Order): Observable<Apartment> {
    return this.http.put<Order>(`${ORDER_API}/${id}`, order);
  }
  findPendingOrder(apartmentId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findOrderPending/' + apartmentId);
  }
  findPendingOrderOfUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_API + '/findPendingOfUser/' + userId);
  }
  deletePendingOrder(orderId: number): Observable<Order> {
    return this.http.delete(ORDER_API + '/' + orderId);
  }
}
