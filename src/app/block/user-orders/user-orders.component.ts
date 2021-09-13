import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Apartment} from '../../model/apartment';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  userOrders: Order[];
  userId;
  displayOrderLabel: string[] = ['order-status', 'startDate', 'endDate', 'paid', 'apartment', 'host', 'a-status', '4'];
  orderList: Order[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.orderList);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  deletedOrder: any;
  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.userId = +paramMap.get('id');
      console.log(this.userId);
      this.findOrdersByUser();
    });
  }
  ngOnInit(): void {
  }
  findOrdersByUser() {
    this.orderService.findPendingOrderOfUser(+sessionStorage.getItem('Id')).subscribe(orders => {
      this.userOrders = orders;
      this.orderList = orders;
      console.log(this.orderList);
      this.dataSource.data = orders as Order[];
    }, error => {
      console.log(error);
    });
  }
  deletePendingOrder(orderId: number) {
    this.orderService.deletePendingOrder(orderId).subscribe(() => {
      this.deletedOrder = true;
      console.log('Xóa thành công');
    });
  }
  ngbDateToDate(date: any) {
    return new Date(date);
  }
}
