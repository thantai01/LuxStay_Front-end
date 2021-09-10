import {Component, Input, OnInit} from '@angular/core';
import { Apartment } from 'src/app/model/apartment';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order';
import {User} from '../../model/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApartmentService} from '../../service/apartment.service';
import {AuthService} from '../../service/auth.service';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParseCustomsFormaterService} from '../../service/ngb-date-parse-customs-formater.service';
import {error} from 'protractor';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  day: number;
  totalPaid: number;
  apartment: Apartment;
  order: Order;
  orderForm: FormGroup = new FormGroup({
    userPhoneNums: new FormControl('', Validators.required),
    userFullName: new FormControl('', Validators.required),
  });

  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private userService: AuthService,
              calendar: NgbCalendar,
              private ngbDateParse: NgbDateParseCustomsFormaterService,
              private config: NgbDatepickerConfig) {
    const current = new Date();
    config.minDate = { year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate() };
    config.maxDate = { year: 2099, month: 12, day: 31 };
    config.outsideDays = 'visible';
  }

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  startDateJs: Date;
  endDateJs: Date;

  apartmentPrice: any;
  apartmentId: any;
  orderCreated: any;
  ngOnInit(): void {
  }
  cal() {
    let date1;
    let date2;
    let diffTime;
    let diffDays;
// To calculate the no. of days between two dates
    date1 = new Date(this.endDateJs);
    date2 = new Date(this.startDateJs);
    diffTime = (date1.getTime() - date2.getTime());
    diffDays = diffTime / (24 * 3600 * 1000);
    console.log('Difference=' + diffDays);
    this.day = diffDays;
    console.log('Days=' + this.day);
    this.totalPaid = +sessionStorage.getItem('aPrice') * this.day ;
    console.log(this.totalPaid);
    return this.totalPaid;
  }

  getApartment(id: number){
    return this.apartmentService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
    });
  }

  createRentOrder(){
    this.order = new Order();
    this.order = this.orderForm.value;
    this.order.user = {id: sessionStorage.getItem('Id')};
    this.order.apartment = {id: sessionStorage.getItem('aId')};
    this.order.totalPaid = this.cal();
    this.order.startDate = this.startDateJs;
    this.order.endDate = this.endDateJs;
    console.log(this.order);
    this.orderService.booking(this.order).subscribe(order => {
      console.log('success create order');
      this.orderCreated = true;
    }, error1 => {
      console.log(error1);
    });
  }

  homePage() {
    this.router.navigateByUrl('');
  }

  onDateSelection(date: NgbDate) {
    let array = [];
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      array = (this.ngbDateParse.format(date).split('/'));
      console.log(array);
      this.startDateJs = new Date(array[2], array[1] - 1, array[0]);
      console.log(this.startDateJs);
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      array = (this.ngbDateParse.format(date).split('/'));
      console.log(array);
      this.endDateJs = new Date(array[2], array[1] - 1, array[0]);
      console.log(this.endDateJs);
    } else {
      this.toDate = null;
      this.fromDate = date;
      array = (this.ngbDateParse.format(date).split('/'));
      console.log(array);
      this.startDateJs = new Date(array[2], array[1] - 1, array[0]);
      console.log(this.startDateJs);
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
