import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsViewComponent } from './apartments-view.component';

describe('ApartmentsViewComponent', () => {
  let component: ApartmentsViewComponent;
  let fixture: ComponentFixture<ApartmentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
