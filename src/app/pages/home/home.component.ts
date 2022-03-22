import { Component, OnInit } from '@angular/core';
import { InfoPoke } from 'src/app/interfaces/poke.interfaces';
import { RepoPoke } from 'src/app/interfaces/respo.interface';
import { PokeapiService } from '../../pokemon/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
