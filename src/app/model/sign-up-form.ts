export class SignUpForm {
  username: string;
  phone: string;
  password: string;
  confirm?: string;
  roles: string[];
  constructor( username: string, phoneNums: string, password: string) {
  this.username = username;
  this.phone = phoneNums;
  this.password = password;
  this.roles = ['user'];
}
}
