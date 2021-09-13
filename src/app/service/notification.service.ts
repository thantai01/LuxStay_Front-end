import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notice} from '../model/notice';
import {environment} from '../../environments/environment';
import {Order} from '../model/order';
const NOTIFICATION_API = environment.API_SERVER + '/notifications';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  findAllOrderByUserId(userId: number): Observable<Notice[]> {
    return this.http.get<Notice[]>(NOTIFICATION_API + '/findAllByUser/' + userId);
  }
  newNotification(notice: Notice): Observable<any> {
    return this.http.post(NOTIFICATION_API, notice);
  }
}
