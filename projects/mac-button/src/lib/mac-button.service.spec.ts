import { TestBed } from '@angular/core/testing';

import { MacButtonService } from './mac-button.service';

describe('MacButtonService', () => {
  let service: MacButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
