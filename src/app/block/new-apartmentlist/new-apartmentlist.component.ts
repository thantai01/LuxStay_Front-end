import { Component, OnInit } from '@angular/core';
import {ApartmentHouse} from '../../model/apartment-house';
import {ApartmentHouseService} from '../../service/apartment-house.service';

@Component({
  selector: 'app-new-apartmentlist',
  templateUrl: './new-apartmentlist.component.html',
  styleUrls: ['./new-apartmentlist.component.css']
})
export class NewApartmentlistComponent implements OnInit {

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
