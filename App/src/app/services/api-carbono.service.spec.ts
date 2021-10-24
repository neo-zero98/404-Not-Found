import { TestBed } from '@angular/core/testing';

import { ApiCarbonoService } from './api-carbono.service';

describe('ApiCarbonoService', () => {
  let service: ApiCarbonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCarbonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
