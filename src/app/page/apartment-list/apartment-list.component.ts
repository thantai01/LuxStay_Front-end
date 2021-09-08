import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';



@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

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
