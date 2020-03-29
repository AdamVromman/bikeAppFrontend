import { TestBed } from '@angular/core/testing';

import { AddedPartDataService } from './added-part-data.service';

describe('AddedPartDataService', () => {
  let service: AddedPartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedPartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
