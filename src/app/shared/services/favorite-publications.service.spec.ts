import { TestBed } from '@angular/core/testing';

import { FavoritePublicationsService } from './favorite-publications.service';

describe('FavoritePublicationsService', () => {
  let service: FavoritePublicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePublicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
