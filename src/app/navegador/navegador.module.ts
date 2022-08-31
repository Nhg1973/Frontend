import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegadorComponent } from './navegador.component';



@NgModule({
  declarations: [
    NavegadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavegadorComponent]
})
export class NavegadorModule { }
