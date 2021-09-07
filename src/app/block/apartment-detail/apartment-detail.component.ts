import { Component, OnInit } from '@angular/core';
import {ApartmentHouse} from '../../model/apartment-house';
import {ApartmentHouseService} from '../../service/apartment-house.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  apartment: ApartmentHouse;
  id: number;

  constructor(private apartmentHomeService: ApartmentHouseService,
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
    this.apartmentHomeService.findById(id).subscribe(apartment => {
      this.apartment = apartment;
      console.log(apartment);
    });
  }
}
