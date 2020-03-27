import { TestBed } from '@angular/core/testing';

import { PartDataServiceService } from './part-data-service.service';

describe('PartDataServiceService', () => {
  let service: PartDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
