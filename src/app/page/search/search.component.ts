import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apartment} from '../../model/apartment';
import {Price} from "../../model/price";
import {ApartmenttypeService} from "../../service/apartmenttype.service";
import {Apartmenttype} from "../../model/apartmenttype";
import {ApartmentService} from "../../service/apartment.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  apartments: Apartment [] = [];
  price11: string;
  price22: string;
  typeID: string;
  value: string;
  // @ts-ignore
  apartments: Apartment [] = [];
  apartmentTypes: Apartmenttype [] = [];
  selectedItems: Price;
   prices: Price[] = [
    {price1: '', price2: '500000'},
    {price1: '500000', price2: '1000000'},
    {price1: '1000000', price2: '2000000'},
    {price1: '2000000', price2: '999999999'}
  ];
  constructor(private httpClient: HttpClient,
              private apartmentTyeService: ApartmenttypeService,
              private apartmentService: ApartmentService) {
    // @ts-ignore
    this.apartmentTypes = apartmentTyeService.getAll();
  }
  ngOnInit(): void {
    this.apartmentService.searchAll(this.value, this.typeID, this.price11, this.price22);
  }
  getPrice(event: Event) {
   // @ts-ignore
    let selected = event.target.value;
   this.price11 = this.prices[selected].price1;
   this.price22 = this.prices[selected].price2;
   console.log(this.price11);
   console.log(this.price22);
  }
  getValue(event: Event) {
    // @ts-ignore
    this.value = event.target.value;
    console.log(this.value);
  }
  getypeID(event: Event) {
    // @ts-ignore
    this.typeID = event.target.value;
  }
 search(){
    this.apartmentService.searchAll(this.value, this.typeID, this.price11, this.price22);
  }

}
