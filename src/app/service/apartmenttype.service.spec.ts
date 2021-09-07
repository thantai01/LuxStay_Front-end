import { TestBed } from '@angular/core/testing';

import { ApartmenttypeService } from './apartmenttype.service';

describe('ApartmenttypeService', () => {
  let service: ApartmenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmenttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
