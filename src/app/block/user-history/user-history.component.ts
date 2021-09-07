import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";
import {Apartment} from "../../model/apartment";

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {
  orders: Order [] = [];
  apartments: Apartment [] = [];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    // @ts-ignore
    this.orders = this.orderService.getOrderOfUser(sessionStorage.getItem('Id'));
    // this.getApartmentByOrder();
  }
  // getApartmentByOrder(){
  //   for (let order of this.orders) {
  //     this.apartments.push(order.apartmemt);
  //   }
  // }

}
