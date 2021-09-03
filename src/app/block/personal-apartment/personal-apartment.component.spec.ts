import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalApartmentComponent } from './personal-apartment.component';

describe('PersonalApartmentComponent', () => {
  let component: PersonalApartmentComponent;
  let fixture: ComponentFixture<PersonalApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
