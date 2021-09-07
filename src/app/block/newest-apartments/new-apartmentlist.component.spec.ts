import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApartmentlistComponent } from './new-apartmentlist.component';

describe('NewApartmentlistComponent', () => {
  let component: NewApartmentlistComponent;
  let fixture: ComponentFixture<NewApartmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApartmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
