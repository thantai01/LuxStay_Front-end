import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApartmentService} from '../../service/apartment.service';
import {Apartment} from '../../model/apartment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newestApartments: Apartment [];
  constructor(private modalService: NgbModal,
              private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.get8Newest();
  }
  get8Newest() {
    this.apartmentService.find8Newest().subscribe(apartments => {
      this.newestApartments = apartments;
      console.log(apartments);
    });
  }
}
