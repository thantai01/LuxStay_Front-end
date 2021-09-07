import { Component, OnInit } from '@angular/core';
import {ApartmentHouseService} from '../../service/apartment-house.service';
import {ApartmentHouse} from '../../model/apartment-house';


@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartmentHouses: ApartmentHouse[] = [];

  constructor(private apartmentService: ApartmentHouseService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.apartmentService.getAll().subscribe(apartments => {
      this.apartmentHouses = apartments;
      console.log(apartments);
    });
  }

}
