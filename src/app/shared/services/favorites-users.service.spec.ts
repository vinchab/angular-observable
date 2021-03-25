import { TestBed } from '@angular/core/testing';

import { FavoritesUsersService } from './favorites-users.service';

describe('FavoritesUsersService', () => {
  let service: FavoritesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
