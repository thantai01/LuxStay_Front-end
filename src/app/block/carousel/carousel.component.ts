import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  apartments: Apartment[] = [{
    name: 'Căn số 1',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/treehouse-valentine01.jpg?alt=media&token=7bdf1ccd-8536-4ef9-b629-da1b0afb0adf',
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
    utilities: 'Bể bơi/ BBQ sân sau'
  }, {
    name: 'Căn số 2',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/Twin%20Glass%20Treehouse01.jpg?alt=media&token=99b71625-9f6d-4fca-bc26-1495d3007e20',
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
    utilities: 'Mini bar'
  }, {
    name: 'Căn số 3',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/casem4-a667f.appspot.com/o/yalongbay01.jpg?alt=media&token=c5aa1021-4337-4a49-81c2-6637360078d4',
    address: 'Số 1 ngõ 2 đường 3',
    price: '1000',
    description: 'Some thing to say but can not say',
    bethRoom: '3',
    bathRoom: '2',
    utilities: 'Bể bơi/ BBQ sân sau'
  }]
  ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.apartments);
  }

}
