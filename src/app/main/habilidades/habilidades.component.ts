import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  mihabilidad:any;

  constructor(private activatedRoute: ActivatedRoute,
    private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const parametro: any =  this.activatedRoute.snapshot.params['id'];  
      this.datosPorfolio.obtenerPortfolio(parametro).subscribe(data=>{
      this.mihabilidad = data.habilidades;
      //console.log(this.mihabilidad.habilidades);
        });
      });
    }
  
  }
