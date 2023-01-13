import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';




@NgModule({
  declarations: [
    MainComponent,
    HabilidadesComponent,
    ServiciosComponent,
    TrabajosComponent
 
  ],
  imports: [
    CommonModule
  ],
  exports:[MainComponent],
})
export class MainModule { }
