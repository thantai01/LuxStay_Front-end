import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SignUpForm} from '../model/sign-up-form';
import {JwtResponse} from '../model/jwt-response';

class SignInForm {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_SERVER + '/auth/sign-up';
  private API_SIGNIN = environment.API_SERVER + '/auth/sign-in';
  constructor(private http: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }
}
