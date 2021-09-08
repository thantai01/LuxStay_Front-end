import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApartmentService} from '../../service/apartment.service';
import {Apartment} from '../../model/apartment';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user-apartment',
  templateUrl: './user-apartment.component.html',
  styleUrls: ['./user-apartment.component.css']
})
export class UserApartmentComponent implements OnInit, AfterViewInit {
  displayApartmentLabel: string[] = [ 'name', 'ward', 'district', 'city', 'detail', 'edit', 'status', 'setStatus'];
  personalApartments: any[] = [{}];
  dataSource = new MatTableDataSource<Apartment>(this.personalApartments);
  clickedRows = new Set<any>();
  userId: number;

  constructor(private apartmentService: ApartmentService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // this.userId = +paramMap.get('user/:id');
      this.getApartments();
    });
  }
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

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
}
