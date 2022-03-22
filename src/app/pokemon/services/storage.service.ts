import { Injectable } from '@angular/core';
import { NgbCalendarGregorian } from '@ng-bootstrap/ng-bootstrap';
import { InfoPoke } from 'src/app/interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _hideModals: boolean = true;
  private _localPoke: InfoPoke []= [];

  public pokeInfoEd!: InfoPoke;

  constructor( ) { 
    this.init();
    this.pokeInfoEd
  }
  get getLocalpokes(){
    return [...this._localPoke];
  }
  async init (){
    this.getPokeStorage()
  }
  setPokeStorage(poke: InfoPoke){

    const exist = this._localPoke.find(localPoke => localPoke.id === poke.id);
    if(!!exist){
      this._localPoke = this._localPoke.filter(localPoke => localPoke.id !== poke.id)
    }else{
      this._localPoke = [poke, ...this._localPoke];
    }
    localStorage.setItem('Pokes', JSON.stringify( this._localPoke ));
  }
  async getPokeStorage(){
    const pokes = await localStorage.getItem('Pokes');
    this._localPoke = JSON.parse(pokes || '');
  }
  get hideModal(){
    return this._hideModals;
  }
  closeModal(){
    this._hideModals = true;
  }
  showModal(data : InfoPoke){
    this.pokeInfoEd = data;
    console.log(data);
    this._hideModals = false;
  }
}
