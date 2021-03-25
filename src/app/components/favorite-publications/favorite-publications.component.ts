import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavoritePublications } from 'src/app/shared/models/favorite-publications';
import { FavoritePublicationsService } from 'src/app/shared/services/favorite-publications.service';

@Component({
  selector: 'app-favorite-publications',
  templateUrl: './favorite-publications.component.html',
  styleUrls: ['./favorite-publications.component.css']
})
export class FavoritePublicationsComponent implements OnInit {
  public favoritePub$ : Observable<IFavoritePublications[]>

  constructor(
    private _favoritePubService : FavoritePublicationsService
  ) { }

  ngOnInit(): void {
    this.favoritePub$ = this._favoritePubService.getAll$()
  }
}
