import { TestBed } from '@angular/core/testing';

import { OrderDayService } from './order-day.service';

describe('OrderDayService', () => {
  let service: OrderDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
