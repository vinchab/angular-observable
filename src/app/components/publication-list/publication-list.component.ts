import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPublication } from 'src/app/shared/models/publication';
import { PublicationService } from 'src/app/shared/services/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  public publications$: Observable<IPublication[]>

  constructor(
    private _publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.publications$ = this._publicationService.getAll$()
  }
}