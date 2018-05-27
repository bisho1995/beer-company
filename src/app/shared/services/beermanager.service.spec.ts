import { TestBed, inject } from '@angular/core/testing';

import { BeermanagerService } from './beermanager.service';

describe('BeermanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeermanagerService]
    });
  });

  it('should be created', inject([BeermanagerService], (service: BeermanagerService) => {
    expect(service).toBeTruthy();
  }));
});
