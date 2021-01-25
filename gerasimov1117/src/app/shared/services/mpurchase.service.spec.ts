import { TestBed } from '@angular/core/testing';

import { MpurchaseService } from './mpurchase.service';

describe('MpurchaseService', () => {
  let service: MpurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
