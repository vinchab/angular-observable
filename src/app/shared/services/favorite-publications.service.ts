import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { FavoritePublications, IFavoritePublications } from '../models/favorite-publications';

@Injectable({
  providedIn: 'root'
})
export class FavoritePublicationsService {
  private _favorites$: BehaviorSubject<FavoritePublications[]> = new BehaviorSubject<FavoritePublications[]>([])
  public favorites$: Observable<FavoritePublications[]> = this._favorites$.asObservable()

  constructor(
    private _http: HttpClient
  ) {
    this.fetch()
  }

  fetch() {
    console.log('fetch');
    
    const id : number = 44

    this._http.get<IFavoritePublications[]>('http://localhost:3000/favorite/publication/' + id).pipe(
      tap(favoritesPub => console.log('Favorites publications => ', favoritesPub)),

      map(favoritesPub => favoritesPub.map(favorite => new FavoritePublications(favorite)))

    ).subscribe(
      favoritesPub => this._favorites$.next(favoritesPub) 
    )
  }

  public getAll$(): Observable<FavoritePublications[]> {
    return this.favorites$
  }
}
