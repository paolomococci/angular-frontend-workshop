import { TestBed } from '@angular/core/testing';

import { TroublesService } from './troubles.service';

describe('TroublesService', () => {
  let service: TroublesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroublesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
