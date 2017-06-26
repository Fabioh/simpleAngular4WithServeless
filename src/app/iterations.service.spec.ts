import { TestBed, inject } from '@angular/core/testing';
import { IterationsService } from './iterations.service';

describe('IterationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IterationsService]
    });
  });

  it('should be created', inject([IterationsService], (service: IterationsService) => {
    expect(service).toBeTruthy();
  }));
});
