import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IPublication, Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private _publications: BehaviorSubject<Publication[]> = new BehaviorSubject<Publication[]>([])
  public publications$: Observable<Publication[]> = this._publications.asObservable()

  constructor(
    private _http: HttpClient
  ) { 
    this.fetch()
  }

  fetch(){
    this._http.get<IPublication[]>('http://localhost:3000/publication').pipe(
      tap(publications => console.log('Publications => ', publications)),

      map(publications => publications.map(publication => new Publication(publication)))

    ).subscribe(
      publications => this._publications.next(publications)
    )
  }

  getAll$(): Observable<Publication[]>{
    return this.publications$
  }
}