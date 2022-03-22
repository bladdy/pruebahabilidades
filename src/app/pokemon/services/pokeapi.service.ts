import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RepoPoke } from 'src/app/interfaces/respo.interface';

import { map } from "rxjs/operators";
import { InfoPoke } from '../../interfaces/poke.interfaces';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url: string = 'https://pokeapi.co/api/v2'
  constructor(private http: HttpClient) { }
  getPokemons() {
    // https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
    //https://pokeapi.co/api/v2/pokemon/
    return this.http.get<RepoPoke>(`${this.url}/pokemon?limit=1126&offset=0`)
      .pipe(
        map(this.convertPoke)
      );
  }
  private convertPoke(resp: RepoPoke): InfoPoke[] {
    const pokeList: InfoPoke[] = resp.results.map(poke => {
      const url = poke.url.split('/');
      const id = url[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      return {
        id,
        name: poke.name,
        alias: poke.name,
        url: pic,
        createAt: new Date()
      }
    })
    return pokeList;

  }
}
