import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
//import { AppComponent } from '../app.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PruebaComponent } from '../prueba/prueba.component';
import { EditarComponent } from '../editar/editar.component';
import { PersonaComponent } from '../editar/persona/persona.component';
import { EMainComponent } from '../editar/eMain/eMain.component';
import { EHabilidadesComponent } from '../editar/e-habilidades/e-habilidades.component';



const routes:Routes =[
  {path: 'portfolio/:id',component:PortfolioComponent},
  {path: 'portfolio',component:PruebaComponent},
  {path: "login", component:LoginComponent},
  {path: "editar/persona", component:PersonaComponent},
  {path: "editar/main", component:EMainComponent},
  {path: "editar/habilidades", component:EHabilidadesComponent},
  {path: "persona/:id", component: EditarComponent},
  {path: '**', redirectTo:'portfolio'}
];

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModuleTsngModule { }
