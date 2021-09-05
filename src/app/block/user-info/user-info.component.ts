import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    avatar: new FormControl('')
  });
  id: number;
  avatarUrl: any;
  log: any;
  constructor(private auth: AuthService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getUser(this.id);
    });
  }

  ngOnInit(): void {
  }
  getUser(id: number) {
    return this.auth.findById(id).subscribe(user => {
      console.log(user);
      this.userForm = new FormGroup({
        fullName: new FormControl(user.fullName),
        phone: new FormControl(user.phone),
        email: new FormControl(user.email),
        address: new FormControl(user.address),
        city: new FormControl(user.city),
        avatar: new FormControl(user.avatar)
      });
      this.avatarUrl = user.avatar;
      console.log(this.userForm);
    });
  }
  updateUser() {
    const userInfo = this.userForm.value;
    console.log(userInfo);
    this.auth.updateUserInfo(this.id, userInfo).subscribe(() => {
      console.log('Cập nhật thành công');
      this.log = 'Cập nhật thông tin thành công';
      sessionStorage.setItem('Name', this.userForm.value.name);
    }, e => {
      console.log(e);
    });
  }

}
