import { TestBed } from '@angular/core/testing';

import { ApartmentHouseService } from './apartment-house.service';

describe('ApartmentHouseService', () => {
  let service: ApartmentHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
