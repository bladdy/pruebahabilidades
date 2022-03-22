import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditpokeComponent } from './editpoke/editpoke.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditpokeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ EditpokeComponent ],
  entryComponents: [ EditpokeComponent ]
})
export class ModalsModule { }
