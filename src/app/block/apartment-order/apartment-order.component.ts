import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {MatTableDataSource} from '@angular/material/table';
import {Apartment} from '../../model/apartment';
import {MatPaginator} from '@angular/material/paginator';
import {Order} from '../../model/order';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';
import {NotificationService} from '../../service/notification.service';
import {Notice} from '../../model/notice';

@Component({
  selector: 'app-apartment-order',
  templateUrl: './apartment-order.component.html',
  styleUrls: ['./apartment-order.component.css']
})
export class ApartmentOrderComponent implements OnInit, AfterViewInit {
  displayOrderLabel: string[] = ['order-status', 'customer', 'phone-numbers', 'startDate', 'endDate', 'paid', '3', '4'];
  orderList: Order[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.orderList);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  apartmentId;
  selectedOrder: Order;
  acceptAlert: any;
  cancelAlert: any;
  notification: Notice;
  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private userService: AuthService,
              private noticeService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.apartmentId = +paramMap.get('apartmentId');
      this.findPendingOrder(this.apartmentId);
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findPendingOrder(id: number) {
    this.orderService.findPendingOrder(id).subscribe(orderList => {
      this.orderList = orderList;
      console.log(this.orderList);
      this.dataSource.data = orderList as Order[];
    });
  }

  ngbDateToDate(date: any) {
    return new Date(date);
  }

  acceptOrder(orderId: number) {
    this.orderService.findOrderById(orderId).subscribe(order => {
      this.selectedOrder = order;
      this.selectedOrder.orderStatus = 'Accepted';
      this.orderService.edit(orderId, this.selectedOrder).subscribe(() => {
        console.log(this.selectedOrder);
        this.acceptAlert = true;
        this.findPendingOrder(this.apartmentId);
      });
      }, error => {
        console.log(error);
      });

    this.notification.user = this.selectedOrder.user.id;
    this.notification.content = 'Yêu cầu thuê nhà của bạn được chấp nhận';
    this.noticeService.newNotification(this.notification).subscribe(() => {
      console.log('success sending notification to customer');
    });
  }
  cancelOrder(orderId: number) {
    this.orderService.findOrderById(orderId).subscribe(order => {
      this.selectedOrder = order;
      this.selectedOrder.orderStatus = 'Cancel';
      this.orderService.edit(orderId, this.selectedOrder).subscribe(() => {
        console.log(this.selectedOrder);
        this.cancelAlert = true;
        this.findPendingOrder(this.apartmentId);
      }, error => {
        console.log(error);
      });
    });
    this.notification.user = this.selectedOrder.user.id;
    this.notification.content = 'Bạn vừa bị từ chối yêu cầu thuê nhà từ chủ nhà';
    this.noticeService.newNotification(this.notification).subscribe(() => {
      console.log('success sending notification to customer');
    });
  }
}
