import { TestBed } from '@angular/core/testing';

import { ActivingRoutesService } from './activing-routes.service';

describe('ActivingRoutesService', () => {
  let service: ActivingRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivingRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
