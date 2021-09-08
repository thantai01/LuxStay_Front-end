import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';

@Component({
  selector: 'app-new-apartmentlist',
  templateUrl: './new-apartmentlist.component.html',
  styleUrls: ['./new-apartmentlist.component.css']
})
export class NewApartmentlistComponent implements OnInit {

  apartmentHouses: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.apartmentService.findAll().subscribe(apartments => {
      this.apartmentHouses = apartments;
      console.log(apartments);
    });
  }

}
