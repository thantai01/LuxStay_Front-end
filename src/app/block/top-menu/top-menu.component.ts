import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignUpForm} from '../../model/sign-up-form';
import {AuthService} from '../../service/auth.service';
import {any} from 'codelyzer/util/function';
import {NgModel} from '@angular/forms';
import {SignInForm} from '../../model/sigg-in-form';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  form: any = {};
  signUpForm: SignUpForm;
  signInForm: SignInForm;
  hide = true;
  error1: any = {
    message: 'no-user'
  };
  success: any = {
    message: 'yes'
  };
  isRegisterSuccess = false;
  closeResult: string;
  status: any;
  notice: any;
  userLogged: any;
  constructor(private modalService: NgbModal,
              private authService: AuthService,
              public tokenService: TokenService,
              private router: Router) { }
  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',
      size: 'lg', windowClass: 'your-modal-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  checkLogged() {
    if (sessionStorage.getItem('Id') != null) {
     return this.userLogged = true;
    } else {
      return this.userLogged = false;
    }

  }
  ngSubmit(){
    this.signUpForm = new SignUpForm(
      this.form.username,
      this.form.phone,
      this.form.password,
    );
    console.log(this.signUpForm);
    this.notice = true;
    this.authService.signUp(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error1)){
        this.status = 'Tài khoản đã tồn tại! Vui lòng nhập tên khác';
      }
      if (JSON.stringify(data) === JSON.stringify(this.success)){
        this.isRegisterSuccess = true;
      }
    });
  }
  ngLogin() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log(data);
      if (data.token !== undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setUserId(data.id);
        this.tokenService.setRoles(data.roles);
        console.log(data.roles);
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      } else {
        this.status = 'Login failed! Please try again!';
      }
    });
  }
  logout() {
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('Role');
    sessionStorage.removeItem('Name');
    sessionStorage.removeItem('Id');
    sessionStorage.removeItem('Avatar');
    sessionStorage.removeItem('phone');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  returnHome() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  moveToSearchPage() {
    this.router.navigate(['search']).then(() => {
      window.location.reload();
    });
  }
}
