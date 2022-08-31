import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  miMain:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
     this.miMain = data.Main;
    });
  }

}
