import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { InfoPoke } from 'src/app/interfaces/poke.interfaces';

@Component({
  selector: 'app-pokelistfav',
  templateUrl: './pokelistfav.component.html',
  styleUrls: ['./pokelistfav.component.css']
})
export class PokelistfavComponent implements OnInit {

  get pokemons(): InfoPoke[]{
    return this.storageService.getLocalpokes;
  }
  constructor(private storageService: StorageService) {
   }

  ngOnInit(): void {
  }
  deleteFavorite(poke: InfoPoke) {
    this.storageService.setPokeStorage(poke);
  }
  editFavorite(poke: InfoPoke){
    console.log(poke);
    this.storageService.showModal(poke);

  }

}
