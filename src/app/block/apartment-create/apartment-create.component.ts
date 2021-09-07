import { Component, OnInit } from '@angular/core';
import {ApartmentHouse} from '../../model/apartment-house';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Apartmenttype} from '../../model/apartmenttype';
import {Image} from '../../model/image';
import {ApartmentHouseService} from '../../service/apartment-house.service';
import {ApartmenttypeService} from '../../service/apartmenttype.service';
import {ImageService} from '../../service/image.service';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.css', './assets/vendor/mdi-font/css/material-design-iconic-font.min.css',
  './assets/vendor/font-awesome-4.7/css/font-awesome.min.css',
  './assets/vendor/select2/select2.min.css',
    './assets/vendor/datepicker/daterangepicker.css',
  './assets/css/main.css']
})
export class ApartmentCreateComponent implements OnInit {

  apartmentHomes: ApartmentHouse;
  arrayImage = '';

  apartmentHomeForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(48)]),
    apartmentType: new FormControl(),
    bethRoom: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(10)]),
    bathRoom: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    ward: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  apartmenttypes: Apartmenttype[] = [];
  images: Image[] = [];

  constructor(private apartmentHomeService: ApartmentHouseService,
              private apartmentTypeService: ApartmenttypeService,
              private imageService: ImageService,
              private  router: Router,
              private db: AngularFireDatabase,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllApartmentType();
    this.getAllImage();
  }
  getAllApartmentType() {
    this.apartmentTypeService.getAll().subscribe(apartmentTypes => {
      this.apartmenttypes = apartmentTypes;
    });
  }
  getAllImage() {
    this.imageService.getAll().subscribe(images => {
      this.images = images;
    });
  }
  setnewHouse(){
    // @ts-ignore
    this.apartmentHomes = {
      name: this.apartmentHomeForm.get('name').value,
      apartmentType: this.apartmentHomeForm.get('apartmentType').value,
      bethRoom: this.apartmentHomeForm.get('bethRoom').value,
      bathRoom: this.apartmentHomeForm.get('bathRoom').value,
      description: this.apartmentHomeForm.get('description').value,
      price: this.apartmentHomeForm.get('price').value,
      status: this.apartmentHomeForm.get('status').value,
      city: this.apartmentHomeForm.get('city').value,
      district: this.apartmentHomeForm.get('district').value,
      ward: this.apartmentHomeForm.get('ward').value,
      address: this.apartmentHomeForm.get('address').value,
      imageList: [{
        imageUrl: ''
      }],
    };
  }
  submit() {
    const apartmentHome = this.apartmentHomeForm.value;
    apartmentHome.apartmentType = {
      id: apartmentHome.apartmentType
    };
    this.setnewHouse();
    this.apartmentHomeService.saveApartmentHome(this.apartmentHomes).subscribe(() => {
      alert('đăng nhà thành công');
      this.apartmentHomeForm.reset();
    }, e => console.log(e));
  }
  // saveImage($event) {
  //   this.apartmentHomes.imageList = $event;
  // }
  //
  // saveImg($event: Event) {
  //   // @ts-ignore
  //   this.apartmentHomes.imageList = $event;
  // }

}
