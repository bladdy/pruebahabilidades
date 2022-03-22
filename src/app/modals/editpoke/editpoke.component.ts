import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/pokemon/services/storage.service';
import { InfoPoke } from '../../interfaces/poke.interfaces';

@Component({
  selector: 'app-editpoke',
  templateUrl: './editpoke.component.html',
  styleUrls: ['./editpoke.component.css']
})
export class EditpokeComponent implements OnInit {

  public poke!: InfoPoke;
  public pokeForm!: FormGroup | null;
  constructor(public storageService: StorageService, private fb: FormBuilder) {
    //this.poke = storageService.pokeInfoEd;
   }

  ngOnInit(): void {
    this.poke = this.storageService.pokeInfoEd;

    this.pokeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      alias: ['', Validators.required],
      createAt: ['', Validators.required],
    });
  }
  closeFavorite(){
    this.storageService.closeModal();

  }
  guardarPoke(){

  }

}
