import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FavoritesUsers, IFavoritesUsers } from '../models/favorites-users';

@Injectable({
  providedIn: 'root'
})
export class FavoritesUsersService {
  private _favorites$: BehaviorSubject<FavoritesUsers[]> = new BehaviorSubject<FavoritesUsers[]>([])
  public favorites$: Observable<FavoritesUsers[]> = this._favorites$.asObservable()

  constructor(
    private _http: HttpClient
  ) { }

  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  async load(token:string){
    const data = await this._http.get<IFavoritesUsers[]>('http://localhost:3000/favorite/user/' + token, this._httpOptions).pipe(
      tap(favorites => console.log('Favotires User => ', favorites)),

      map(favorites => favorites.map(favorite => new FavoritesUsers(favorite)))

    ).toPromise()

    this._favorites$.next(data)
  }
}
