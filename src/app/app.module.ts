import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './hero/hero.module';
import { MainModule } from './main/main.module';
import { ModalsModule } from './modals/modals.module';
import { NavegadorModule } from './navegador/navegador.module';
import { PieModule } from './pie/pie.module';
import{HttpClientModule} from '@angular/common/http'





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    MainModule,
    ModalsModule,
    NavegadorModule,
    PieModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
