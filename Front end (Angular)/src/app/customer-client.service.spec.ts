import { TestBed } from '@angular/core/testing';

import { CustomerClientService } from './customer-client.service';

describe('CustomerClientService', () => {
  let service: CustomerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
