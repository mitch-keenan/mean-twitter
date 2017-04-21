import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { ChirpService } from './chirp.service';

describe('ChirpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ChirpService]
    });
  });

  it('should ...', inject([ChirpService, HttpModule], (service: ChirpService) => {
    expect(service).toBeTruthy();
  }));
});
