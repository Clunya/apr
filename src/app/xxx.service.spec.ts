import { TestBed } from '@angular/core/testing';

import { XxxService } from './xxx.service';

describe('XxxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XxxService = TestBed.get(XxxService);
    expect(service).toBeTruthy();
  });
});
