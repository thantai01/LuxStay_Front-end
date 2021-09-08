import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Apartmenttype} from '../../model/apartmenttype';
import {Image} from '../../model/image';
import {ApartmenttypeService} from '../../service/apartmenttype.service';
import {ImageService} from '../../service/image.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {Apartment} from '../../model/apartment';
import {ApartmentService} from '../../service/apartment.service';


@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.css']
})
export class ApartmentCreateComponent implements OnInit {
  apartment: Apartment;
  newApartment: Apartment;
  selectedFile: File[];
  apartmenttypes: Apartmenttype[] = [];
  images: Image[] = [];
  newImage: Image;
  selectedApartment: Apartment;

  apartmentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(48)]),
    apartmentType: new FormControl(),
    bethRoom: new FormControl('', [Validators.required, Validators.min(1), Validators.maxLength(10)]),
    bathRoom: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    ward: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  apartmentDetail: FormGroup = new FormGroup({
    name: new FormControl(),
    apartmentType: new FormControl(),
    bethRoom: new FormControl(),
    bathRoom: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    district: new FormControl(),
    ward: new FormControl(),
    address: new FormControl(),
    status: new FormControl(),
    user: new FormControl(),
    imageList: new FormControl(),
  });

  constructor(private apartmentService: ApartmentService,
              private apartmentTypeService: ApartmenttypeService,
              private imageService: ImageService,
              private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllApartmentType();
  }

  getAllApartmentType() {
    this.apartmentTypeService.getAll().subscribe(apartmentTypes => {
      this.apartmenttypes = apartmentTypes;
    });
  }

  saveApartment() {
    this.apartment = new Apartment();
    this.apartment = this.apartmentForm.value;
    this.apartment.apartmentType = {id: this.apartmentForm.value.apartmentType};
    this.apartment.status = 'Đang trống';
    this.apartment.address = '......';
    this.apartment.user = {id: sessionStorage.getItem('Id')};
    this.apartment.imageList = this.images;
    // console.log(this.apartment);
    this.apartmentService.save(this.apartment).subscribe(newApartment => {
      this.newApartment = newApartment;
      console.log(newApartment);
      this.apartmentService.findById(newApartment.id).subscribe(selectedApartment => {
        console.log(selectedApartment);
        this.saveImgToSql(selectedApartment.id);
        console.log('thêm ảnh vào nhà thành công');
      }, error => {
        console.log(error);
      });
    });
  }

  onFileChange(event: Event): void {
    // @ts-ignore
    this.selectedFile = event.target.files;
    console.log(this.selectedFile);
  }

  onUpload(): void {
    let image;
    let nameImg;
    let fileRef;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.selectedFile.length; i++) {
      image = new Image();
      nameImg = this.getCurrentDateTime() + this.selectedFile[i].name;
      fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedFile[i]).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            console.log(url);
            image.imageUrl = url;
            this.images.push(image);
            console.log(image);
            console.log(this.images);
          });
        })
      ).subscribe();
    }
  }

  getCurrentDateTime() {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  saveImgToSql(apartmentId: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.images.length; i++) {
      this.newImage = {
        imageUrl: this.images[i].imageUrl,
        apartmentImage: apartmentId,
      };
      console.log(this.newImage);
      console.log('Thêm ảnh vào db thành công');
    }
  }

  findApartmentById(apartmentId: number) {
    this.apartmentService.findById(apartmentId).subscribe(apartment => {
      this.selectedApartment = apartment;
      console.log(apartment);
      this.apartmentDetail = apartment;
      console.log(this.apartmentDetail);
    });
  }

}
