import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesUsersComponent } from './favorites-users.component';

describe('FavoritesUsersComponent', () => {
  let component: FavoritesUsersComponent;
  let fixture: ComponentFixture<FavoritesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
