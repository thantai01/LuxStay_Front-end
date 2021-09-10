import { TestBed } from '@angular/core/testing';

import { NgbDateParseCustomsFormaterService } from './ngb-date-parse-customs-formater.service';

describe('NgbDateParseCustomsFormaterService', () => {
  let service: NgbDateParseCustomsFormaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbDateParseCustomsFormaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
