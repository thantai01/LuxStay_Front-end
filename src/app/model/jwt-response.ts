export class JwtResponse {
  public token: any;
  public id: any;
  public name: any;
  public avatar: any;
  public roles: any[];
  constructor(token: any, id: any, name: any, avatar: any, roles: any) {
    this.token = token;
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.roles = roles;
  }
}
