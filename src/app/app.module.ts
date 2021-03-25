import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { FavoritesUsersComponent } from './components/favorites-users/favorites-users.component';
import { FavoritePublicationsComponent } from './components/favorite-publications/favorite-publications.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PublicationListComponent,
    FavoritesUsersComponent,
    FavoritePublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
