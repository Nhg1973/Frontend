import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  lista:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
    this.lista = data;

    
    });
  }
}
