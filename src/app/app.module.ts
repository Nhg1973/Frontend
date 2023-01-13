import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { MainModule } from './main/main.module';
import { ModalsModule } from './modals/modals.module';
import { NavegadorModule } from './navegador/navegador.module';
import { PieModule } from './pie/pie.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModuleTsngModule } from './app-routing.module.tsng/app-routing.module.tsng.module';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PorfolioService } from './servicios/porfolio.service';
import { PruebaComponent } from './prueba/prueba.component';
import { EditarComponent } from './editar/editar.component';
import { PersonaComponent } from './editar/persona/persona.component';
import { EMainComponent } from './editar/eMain/eMain.component';
import { EHabilidadesComponent } from './editar/e-habilidades/e-habilidades.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    PruebaComponent,
    EditarComponent,
    PersonaComponent,
    EMainComponent,
    EHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    MainModule,
    ModalsModule,
    NavegadorModule,
    PieModule,
    HttpClientModule,
    AppRoutingModuleTsngModule,
    ReactiveFormsModule,
  


  ],
  providers: [PorfolioService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
