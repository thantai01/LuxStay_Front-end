import { Component, OnInit } from '@angular/core';
import {SignUpForm} from '../../model/sign-up-form';
import {SignInForm} from '../../model/sigg-in-form';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  userName: any;
  constructor(private modalService: NgbModal,
              private authService: AuthService,
              public tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('Name');
  }
  getOut() {
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('Role');
    sessionStorage.removeItem('Name');
    sessionStorage.removeItem('Id');
    sessionStorage.removeItem('Avatar');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  toHomePage() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  toApartmentsPage() {
  }
}
