import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order';
import {MatTableDataSource} from '@angular/material/table';
import {Apartment} from '../../model/apartment';
import {MatPaginator} from '@angular/material/paginator';
import {OrderService} from '../../service/order.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult = '';
  orderId;
  constructor(private orderService: OrderService,
              private modalService: NgbModal) { }
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
  checkIn(orderId: number) {
    this.orderService.findOrderById(orderId).subscribe(selectedOrder => {
      this.selectedOrder = selectedOrder;
      this.selectedOrder.checkin = true;
      console.log(this.selectedOrder);
    });
    this.orderService.edit(orderId, this.selectedOrder).subscribe(() => {
      console.log('check - in thành công');
      this.checkInSuccess = true;
      this.findALlOrderOfUser(+sessionStorage.getItem('Id'));
    });
  }

  rating(id) {

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

}
