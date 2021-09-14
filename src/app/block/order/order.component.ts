import {Component, Input, OnInit} from '@angular/core';
import { Apartment } from 'src/app/model/apartment';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order';
import {User} from '../../model/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApartmentService} from '../../service/apartment.service';
import {AuthService} from '../../service/auth.service';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParseCustomsFormaterService} from '../../service/ngb-date-parse-customs-formater.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderDayService} from '../../service/order-day.service';
import {NotificationService} from '../../service/notification.service';
import {Notice} from '../../model/notice';


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
    userPhoneNums: new FormControl(sessionStorage.getItem('phone'), Validators.required),
    userFullName: new FormControl(sessionStorage.getItem('Name'), Validators.required),
  });
  model: NgbDateStruct;
  json = {
    disable: [],
    disabledDates: [
      {year: 2021, month: 9, day: 19},
      {year: 2021, month: 9, day: 20},
      // { year: 2021, month: 9, day: 20 },
    ]
  };
  isDisabled;
  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private userService: AuthService,
              private ngbDateParse: NgbDateParseCustomsFormaterService,
              private config: NgbDatepickerConfig,
              private calendar: NgbCalendar,
              private dayOrderedService: OrderDayService,
              private notificationService: NotificationService) {
    const current = new Date();
    config.minDate = {year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // to disable specific date and specific weekdays
    this.isDisabled = (
      date: NgbDateStruct
      // current: { day: number; month: number; year: number }
    ) => {
      return this.json.disabledDates.find(x =>
        (new NgbDate(x.year, x.month, x.day).equals(date))
        || (this.json.disable.includes(new NgbDate(date.year, date.month, date.day)) )
      )
        ? true
        : false;
    };
  }

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  startDateJs: Date;
  endDateJs: Date;

  apartmentPrice: any;
  apartmentId: any;
  orderCreated: any;
  notification: Notice;
  ngOnInit(): void {
    this.disableAllDayInOrder();
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
    this.totalPaid = +sessionStorage.getItem('aPrice') * this.day;
    console.log(this.totalPaid);
    return this.totalPaid;
  }

  getApartment(id: number) {
    return this.apartmentService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
    });
  }

  createRentOrder() {
    this.order = new Order();
    this.order = this.orderForm.value;
    this.order.user = {id: sessionStorage.getItem('Id')};
    this.order.apartment = {id: +sessionStorage.getItem('aId')};
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
    this.apartmentService.findById(+sessionStorage.getItem('aId')).subscribe(selected => {
      this.notification.user = selected.user.id;
      this.notification.content = 'Bạn vừa có 1 yêu cầu thuê nhà mới';
      this.notificationService.newNotification(this.notification).subscribe(() => {
        console.log('gửi thông báo tới chủ nhà thành công');
      });
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

  disableAllDayInOrder() {
    // ts-ignore
    let dayTime = [];
    let dateJs;
    let ngbDateStruct: NgbDateStruct;
    this.dayOrderedService.findAllDayInOrderByApartment(+sessionStorage.getItem('aId')).subscribe(dayOrdered => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < dayOrdered.length; i++) {
        dayTime.push(dayOrdered[i].dayInOrder);
      }
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < dayTime.length; j++) {
        dateJs = new Date(dayTime[j]);
        ngbDateStruct = {year: dateJs.getUTCFullYear(), month: dateJs.getUTCMonth() + 1, day: dateJs.getUTCDate()};
        this.json.disabledDates.push(ngbDateStruct);
        console.log(this.json.disabledDates);
        // console.log(this.json);
      }
    });

}


}
