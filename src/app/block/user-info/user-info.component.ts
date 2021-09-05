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
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    avatar: new FormControl('')
  });
  id: number;
  avatarUrl: any;
  constructor(private auth: AuthService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getUser(this.id);
    });
  }
  getUser(id: number) {
    return this.auth.findById(id).subscribe(user => {
      this.userForm = new FormGroup({
        name: new FormControl(user.name),
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

}
