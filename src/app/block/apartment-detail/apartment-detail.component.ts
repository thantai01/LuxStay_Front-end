import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  apartment: Apartment;
  id: number;

  constructor(private apartmentService: ApartmentService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(param => {
      // @ts-ignore
      this.id = +param.get('id');
      this.showDetail(this.id);
    });
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
