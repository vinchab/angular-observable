import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators'
import { IUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public users$: Observable<User[]> = this._users.asObservable()

  constructor(
    private _http: HttpClient
  ) { 
    this.fetch()
  }

  fetch() {
    console.log('fetch users');
    
    this._http.get<IUser[]>('http://localhost:3000/user').pipe(
      tap(users => console.log('Users => ', users)),

      map(users => users.map(user => new User(user)))
     
    ).subscribe(
      users => this._users.next(users) 
    )
  }

  public getAll$(): Observable<User[]> {
    return this.users$
  }

  public getUserById$(id: number): Observable<User> {
    return this.users$.pipe(
      map(users => users.find(user => user.id === id))
    )
  }

  public refreshFetch(){
    this.fetch()
  }
}