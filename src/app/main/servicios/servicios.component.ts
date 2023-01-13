import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  misServicios:any;

  constructor(private activatedRoute: ActivatedRoute,
    private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const parametro: any =  this.activatedRoute.snapshot.params['id'];  
      this.datosPorfolio.obtenerPortfolio(parametro).subscribe(data=>{
      this.misServicios = data.servicios;
      //console.log(this.misServicios);
        });
      });
    }
  
  }
