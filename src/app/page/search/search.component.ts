import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apartment} from '../../model/apartment';
import {ApartmenttypeService} from '../../service/apartmenttype.service';
import {ApartmentService} from '../../service/apartment.service';
import {Price} from '../../model/price';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  apartmentHouses: any[];
  province: any[];
  apartmentType: any[];
  apartments: any;
  price11: string;
  price22: string;
  typeID: string;
  value: string;
  prices: Price[] = [
    {price1: '', price2: '20'},
    {price1: '20', price2: '50'},
    {price1: '50', price2: '100'},
    {price1: '100', price2: '999999999'}
  ];
  selectedItems: Price;

  constructor(private apartmentService: ApartmentService,
              private apartmenttypeService: ApartmenttypeService,
              private httpClient: HttpClient) {
  }

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

  search() {
    this.apartmentService.searchAll(this.value, this.typeID, this.price11, this.price22).subscribe(aprtments => {
      this.apartmentHouses = aprtments;
    });
  }
}
