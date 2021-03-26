import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavoritePublications } from 'src/app/shared/models/favorite-publications';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //simulate get id in local storage
  private _id : number = 44

  public testFavoritePub$: Observable<IFavoritePublications[]>

  constructor(
    private _testService: TestService
  ) { }

  async ngOnInit() {
    this._testService.loadObservalbe(this._id)

    this.testFavoritePub$ = this._testService.favorites$
  }
}
