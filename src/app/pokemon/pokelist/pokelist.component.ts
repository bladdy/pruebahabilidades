import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/pokemon/services/pokeapi.service';
import { InfoPoke } from '../../interfaces/poke.interfaces';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  public pokemons: InfoPoke[] = [];
  public page: number = 0;
  public busqueda: string = '';
  constructor(private pokeapiService: PokeapiService, private storageService: StorageService ) { }

  ngOnInit(): void {
    this.getPoke();
  }
  getPoke() {
    this.pokeapiService.getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }
  nextPages() {
    this.page += 10;
  }
  prevPages() {
    if (this.page > 0)
      this.page -= 10;
  }
  buscarPokemons(buscar: string) {
    this.page = 0;
    this.busqueda = buscar;
  }
  addFavorite(poke: InfoPoke) {
    this.storageService.setPokeStorage(poke);

  }
  


}
