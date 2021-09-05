import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/jwt-response';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_API = environment.API_SERVER + '/api/users';
  constructor(private httpClient: HttpClient) { }
  getUserInfo(): Observable<User>{
    return this.httpClient.get<JwtResponse>(this.USER_API);
  }
}
