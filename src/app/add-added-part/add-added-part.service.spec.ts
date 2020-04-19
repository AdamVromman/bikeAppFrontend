import { TestBed } from '@angular/core/testing';

import { AddAddedPartService } from './add-added-part.service';

describe('AddAddedPartService', () => {
  let service: AddAddedPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAddedPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
