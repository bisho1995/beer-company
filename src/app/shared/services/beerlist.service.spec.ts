import { TestBed, inject } from '@angular/core/testing';

import { BeerlistService } from './beerlist.service';

describe('BeerlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerlistService]
    });
  });

  it('should be created', inject([BeerlistService], (service: BeerlistService) => {
    expect(service).toBeTruthy();
  }));
});
