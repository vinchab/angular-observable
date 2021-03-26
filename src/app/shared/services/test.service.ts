import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FavoritePublications, IFavoritePublications } from '../models/favorite-publications';
import { tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _favorites$ : BehaviorSubject<FavoritePublications[]> = new BehaviorSubject<FavoritePublications[]>([])

  public favorites$ : Observable<FavoritePublications[]> = this._favorites$.asObservable()

  constructor(
    private _http : HttpClient
  ) { }

  async loadObservalbe(id : number){
    const data = await this._http.get<IFavoritePublications[]>('http://localhost:3000/favorite/publication/' + id).pipe(
      //log all result with tap
      tap(favorites => console.log('log all Favorite Publications => ', favorites)),

      map(favorites => favorites.map(favorite => new FavoritePublications(favorite)))
    ).toPromise()

    this._favorites$.next(data)
  }
}
