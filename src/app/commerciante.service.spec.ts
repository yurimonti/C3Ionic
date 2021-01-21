import { TestBed } from '@angular/core/testing';

import { CommercianteService } from './commerciante.service';

describe('CommercianteService', () => {
  let service: CommercianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
