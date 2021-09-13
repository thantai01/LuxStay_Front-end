import { Component, OnInit } from '@angular/core';
import {ApartmentService} from '../../service/apartment.service';
import {ApartmenttypeService} from '../../service/apartmenttype.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  apartmentHouses: any[];
  province: any[];
  apartmentType: any[];

  constructor(private apartmentService: ApartmentService,
              private apartmenttypeService: ApartmenttypeService) { }

  ngOnInit(): void {
    this.findAllApartment();
    this.findAllApartmentType();
  }
  findAllApartment() {
    this.apartmentService.findAll().subscribe(apartments => {
      this.apartmentHouses = apartments;
    });
  }
  findAllApartmentType() {
    this.apartmenttypeService.getAll().subscribe(type => {
      this.apartmentType = type;
    });
  }
}
