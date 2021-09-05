import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SignUpForm} from '../model/sign-up-form';
import {JwtResponse} from '../model/jwt-response';
import {User} from '../model/user';

class SignInForm {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_SERVER + '/auth/sign-up';
  private API_SIGNIN = environment.API_SERVER + '/auth/sign-in';
  private API_USER = environment.API_SERVER + '/users';
  constructor(private httpClient: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.httpClient.post(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signIn);
  }
  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.API_USER + `/${id}`);
  }
  updateUserInfo(id: number, user: User): Observable<User>{
    return this.httpClient.put<User>(this.API_USER + `/${id}`, user);
  }
}
