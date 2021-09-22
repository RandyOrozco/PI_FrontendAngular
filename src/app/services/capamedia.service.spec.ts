import { TestBed } from '@angular/core/testing';

import { CapamediaService } from './capamedia.service';

describe('CapamediaService', () => {
  let service: CapamediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapamediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
