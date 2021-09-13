import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApartmentService} from '../../service/apartment.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Apartmenttype} from '../../model/apartmenttype';
import {ApartmenttypeService} from '../../service/apartmenttype.service';
import {Apartment} from '../../model/apartment';

@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrls: ['./apartment-edit.component.css']
})
export class ApartmentEditComponent implements OnInit {
  apartment: Apartment;

  apartmentForm = FormGroup;
  id: number;
  apartmenttypes: Apartmenttype[] = [];

  constructor(private apartmentService: ApartmentService,
              private apartmenttypeService: ApartmenttypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getApartment(this.id);
    });
  }
  getApartment(id: number) {
    return this.apartmentService.findById(id).subscribe(apartment => {
      // @ts-ignore
      return this.apartmentForm = new FormGroup({
        name: new FormControl(apartment.name),
        apartmentType: new FormControl(apartment.apartmentType.id),
        bethRoom: new FormControl(apartment.bethRoom),
        bathRoom: new FormControl(apartment.bathRoom),
        description: new FormControl(apartment.description),
        price: new FormControl(apartment.price),
        city: new FormControl(apartment.city),
        district: new FormControl(apartment.district),
        ward: new FormControl(apartment.ward),
        status: new FormControl(apartment.status),
        address: new FormControl(apartment.address),
      });
    });
  }
  ngOnInit(): void {
    this.getAllApartmentType();
  }
  getAllApartmentType() {
    this.apartmenttypeService.getAll().subscribe(apartmenttype => {
      this.apartmenttypes = apartmenttype;
    });
  }
  updateApartment(id: number) {
    // @ts-ignore
    const apartment = this.apartmentForm.value;
    apartment.apartmentType = {
      id: apartment.apartmentType
    };
    this.apartmentService.edit(id, apartment).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }


}
