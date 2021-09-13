import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {MatTableDataSource} from '@angular/material/table';
import {Apartment} from '../../model/apartment';
import {MatPaginator} from '@angular/material/paginator';
import {Order} from '../../model/order';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-apartment-order',
  templateUrl: './apartment-order.component.html',
  styleUrls: ['./apartment-order.component.css']
})
export class ApartmentOrderComponent implements OnInit, AfterViewInit {
  displayOrderLabel: string[] = [ 'customer', 'phone-numbers', 'startDate', 'endDate', 'paid', '3', '4'];
  orderList: Order[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.orderList);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  apartmentId;
  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private userService: AuthService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.apartmentId = +paramMap.get('apartmentId');
      this.findOrderByApartment(this.apartmentId);
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  findOrderByApartment(id: number) {
    this.orderService.findAllOrderOfApartment(id).subscribe(orderList => {
      this.orderList = orderList;
      console.log(this.orderList);
      this.dataSource.data = orderList as Order[];
    });
  }
  ngbDateToDate(date: any) {
    return new Date(date);
  }

}
