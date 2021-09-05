import { Injectable } from '@angular/core';

const TOKEN_KEY = 'Token';
const NAME_KEY = 'Name';
const ROLE_KEY = 'Role';
const AVATAR_KEY = 'Avatar';
const ID_KEY = 'Id';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor() { }
  public setUserId(id: any) {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }
  public getUserId(): any {
    return  window.sessionStorage.getItem(ID_KEY);
  }
  public setAvatar(avatar: string){
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY, avatar);
  }
  public getAvatar(): string {
    return window.sessionStorage.getItem(AVATAR_KEY);
  }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name: any){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): any {
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setRoles(roles: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }
  public getRoles(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)){
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority);
      });
    }
    return this.roles;
  }
}
