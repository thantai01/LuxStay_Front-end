import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Apartment} from '../../model/apartment';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
  providers: [NgbCarouselConfig]
})

export class ViewDetailComponent implements OnInit {
  items = [];

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }


}
