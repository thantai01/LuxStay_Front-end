import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {ApartmentService} from "../../service/apartment.service";
import {Apartment} from "../../model/apartment";
import {Order} from "../../model/order";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  day: number;
  startDate: Date;
  endDate: Date;
  totalPaid: number;
  apartmentID: number;
  apartment: Apartment;
  order: Order;
  user: User;
  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private userService: AuthService) {
    // @ts-ignore
    this.userService.findById(sessionStorage.getItem('Id')).subscribe(user => {
      this.user = user;
    });
    this.route.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.apartmentID = param.get('id');
      this.getApartment(this.apartmentID);
    });
  }

  ngOnInit(): void {
  }
  cal() {
// To calculate the no. of days between two dates
    var date1 = new Date(this.endDate);
    var date2 = new Date(this.startDate);
    var diffTime = (date1.getTime() - date2.getTime());
    var diffDays = diffTime / (24 * 3600 * 1000);
    console.log("Difference="+ diffDays);
    this.day = diffDays;
    console.log("Days="+this.day);
    this.totalPaid = this.apartment.price * this.day ;
  }
  getApartment(id: number){
    return this.apartmentService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
    });
  }
  onSubmit(){
    this.order = new Order();
    this.order.user = this.user;
    this.order.apartmemt = this.apartment;
    this.order.startDate = this.startDate;
    this.order.endDate = this.endDate;
    this.order.totalPaid = this.totalPaid;
    this.orderService.booking(this.order).subscribe(data => console.log(data), error => console.log(error));
    alert("Apartment Booked Succesfully!!");
    this.apartment.status = 'not available';
    this.apartmentService.save(this.apartment).subscribe(data => console.log(data), error => console.log(error));
  }
  homePage() {
    this.router.navigateByUrl('');
  }

}
