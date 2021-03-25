import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavoritesUsers } from 'src/app/shared/models/favorites-users';
import { FavoritesUsersService } from 'src/app/shared/services/favorites-users.service';

@Component({
  selector: 'app-favorites-users',
  templateUrl: './favorites-users.component.html',
  styleUrls: ['./favorites-users.component.css']
})
export class FavoritesUsersComponent implements OnInit {
  public favorites$: Observable<IFavoritesUsers[]>
  
  private _token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidi5jaGFibGFpeEBnbWFpbC5jb20ifSwiaWF0IjoxNjE2Mjg1Mjk3fQ.a-n-KvvuQ8d_hCz5nqLoh4GhdhHCRBadwblN5xlYak4'
    
  constructor(
    private _favoritesService: FavoritesUsersService
  ) { }

  async ngOnInit() {
    this._favoritesService.load(this._token)
    
    this.favorites$ = this._favoritesService.favorites$
    
  }
}
