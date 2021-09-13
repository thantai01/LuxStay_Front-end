import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  apartment: Apartment;
  id: number;
  orders: Order [] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  userLogged: any;
  constructor(private apartmentService: ApartmentService,
              private activatedRoute: ActivatedRoute,
              config: NgbCarouselConfig,
              private router: Router,
              private orderService: OrderService) {
    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      this.id = +param.get('id');
      this.showDetail(this.id);
      this.showComment(this.id);
    });
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.animation = false;
  }

  ngOnInit(): void {
  }
  showComment(id: number) {
    this.orderService.findAllOrderOfApartment(id).subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }
  showDetail(id: number) {
    this.apartmentService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
      console.log(apartment);
    });
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  signInToOrder() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  checkLogged() {
    if (sessionStorage.getItem('Id') != null) {
      return this.userLogged = true;
    } else {
      return this.userLogged = false;
    }
  }

  addSessionAndMoveToOrder(param1: any, param2: any) {
    sessionStorage.setItem('aPrice', param1);
    sessionStorage.setItem('aId', param2);
    this.router.navigateByUrl('apartments/' + this.apartment.id + '/detail/order');
  }
}
