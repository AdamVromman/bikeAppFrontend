import { TestBed } from '@angular/core/testing';

import { PartDataService } from './part-data.service';

describe('PartDataService', () => {
  let service: PartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
