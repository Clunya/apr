import { TestBed } from '@angular/core/testing';

import { SedService } from './sed.service';

describe('SedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SedService = TestBed.get(SedService);
    expect(service).toBeTruthy();
  });
});
