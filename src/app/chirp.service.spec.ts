import { TestBed, inject } from '@angular/core/testing';

import { ChirpService } from './chirp.service';

describe('ChirpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChirpService]
    });
  });

  it('should ...', inject([ChirpService], (service: ChirpService) => {
    expect(service).toBeTruthy();
  }));
});
