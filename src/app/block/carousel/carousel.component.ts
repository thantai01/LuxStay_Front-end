import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  top5Apartments: Apartment[] = [{
    name: 'Căn số 1',
    imageList: ['https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/treehouse-valentine01.jpg?alt=media&token=7bdf1ccd-8536-4ef9-b629-da1b0afb0adf'],
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
  }, {
    name: 'Căn số 2',
    imageList: ['https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/Twin%20Glass%20Treehouse01.jpg?alt=media&token=99b71625-9f6d-4fca-bc26-1495d3007e20'],
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
  }, {
    name: 'Căn số 3',
    imageList: ['https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/yalongbay01.jpg?alt=media&token=c5aa1021-4337-4a49-81c2-6637360078d4'],
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
  }, {
    name: 'Căn số 4',
    imageList: ['https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/Miahouse01.jpg?alt=media&token=b1bde63d-d9e0-4868-b9a0-f47c954ec9ce'],
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
  }, {
    name: 'Căn số 5',
    imageList: ['https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/woodendream01.jpg?alt=media&token=7d71945d-9360-4114-9746-ec04b92e3268'],
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
  }]
  ;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
  }
  displayOnBrand() {
  }
}
