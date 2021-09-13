import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApartmentService} from '../../service/apartment.service';
import {Apartment} from '../../model/apartment';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-user-apartment',
  templateUrl: './user-apartment.component.html',
  styleUrls: ['./user-apartment.component.css']
})
export class UserApartmentComponent implements OnInit, AfterViewInit {
  displayApartmentLabel: string[] = [ 'name', 'ward', 'district', 'city', 'detail', 'edit', 'status', 'new-status', 'setStatus', 'viewOrders'];
  personalApartments: any[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.personalApartments);
  clickedRows = new Set<any>();
  userId: number;
  status: any[] = [
    { id: 1, name: 'Còn trống' },
    { id: 2, name: 'Đã được thuê' },
    { id: 3, name: 'Đang sửa chữa' },
    { id: 4, name: 'Ngừng cung cấp dịch vụ' }
  ];
  newStatus: string;
  // selected: number;
  constructor(private apartmentService: ApartmentService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // this.userId = +paramMap.get('user/:id');
      this.getApartments();
    });
  }
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  apartment: Apartment;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getApartments() {
    return this.apartmentService.findAllByUser(Number(sessionStorage.getItem('Id'))).subscribe(data => {
      console.log(data);
      this.dataSource.data = data as Apartment[];
      });
  }
  setApartmentStatus(apartmentId: number) {
    this.apartmentService.findById(apartmentId).subscribe(selected => {
      console.log(selected);
      this.apartment = selected;
      this.apartment.status = this.newStatus;
      this.apartmentService.save(this.apartment).subscribe(newstatus => {
        console.log(newstatus);
        console.log('Đã cập nhật  trạng thái nhà');
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }
  selectStatus() {
    // @ts-ignore
    const name = document.getElementById('selected')?.value;
    console.log(name);
    this.newStatus = name;
    console.log(this.newStatus);
    // this.newStatus = status;
    // console.log(this.newStatus);
  }

}
