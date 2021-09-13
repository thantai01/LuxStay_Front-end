import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentOrderComponent } from './apartment-order.component';

describe('ApartmentOrderComponent', () => {
  let component: ApartmentOrderComponent;
  let fixture: ComponentFixture<ApartmentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
