import { TestBed } from '@angular/core/testing';

import { FormaturaService } from './formatura.service';

describe('FormaturaService', () => {
  let service: FormaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
