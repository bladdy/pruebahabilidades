import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonModule } from './pokemon/pokemon.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PokemonModule,
    HttpClientModule,
    AppRoutingModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
