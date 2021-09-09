import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  apartment: Apartment;
  id: number;

  constructor(private apartmentService: ApartmentService,
              private activatedRoute: ActivatedRoute,
              config: NgbCarouselConfig) {
    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      this.id = +param.get('id');
      this.showDetail(this.id);
    });
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = false;
  }

  ngOnInit(): void {
  }
  showDetail(id: number) {
    this.apartmentService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
      console.log(apartment);
    });
  }
}
