import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order';
import {MatTableDataSource} from '@angular/material/table';
import {Apartment} from '../../model/apartment';
import {MatPaginator} from '@angular/material/paginator';
import {OrderService} from '../../service/order.service';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {
  displayOrderLabel: string[] = ['order-status', 'startDate', 'endDate', 'paid', 'apartment', 'check-in', 'checkin', 'rating'];
  orderList: Order[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.orderList);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  checkInSuccess: any;
  selectedOrder: Order;
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.findALlOrderOfUser(+sessionStorage.getItem('Id'));
  }
  ngbDateToDate(date: any) {
    return new Date(date);
  }
  findALlOrderOfUser(userId: number) {
    this.orderService.findAllOrderOfUser(userId).subscribe(orders => {
      this.orderList = orders;
      console.log(this.orderList);
      this.dataSource.data = orders as Order[];
    });
  }
  checkIn(id) {
    this.orderService.findOrderById(id).subscribe(selectedOrder => {
      this.selectedOrder = selectedOrder;
      this.selectedOrder.checkin = true;
      console.log(this.selectedOrder);
      this.orderService.edit(id, this.selectedOrder).subscribe(() => {
        console.log('check - in thành công');
        this.checkInSuccess = true;
        this.findALlOrderOfUser(+sessionStorage.getItem('Id'));
      });
    });
  }

  rating(id) {

  }
}
