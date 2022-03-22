import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokelistComponent } from './pokelist/pokelist.component';
import { PokelistfavComponent } from './pokelistfav/pokelistfav.component';

import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    PokelistComponent,
    FiltroPipe,
    PokelistfavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokelistComponent,
    PokelistfavComponent
  ]
})
export class PokemonModule { }
