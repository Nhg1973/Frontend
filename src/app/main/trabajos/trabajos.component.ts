import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  miTrabajos:any;

  constructor(private activatedRoute: ActivatedRoute,
    private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const parametro: any =  this.activatedRoute.snapshot.params['id'];  
      this.datosPorfolio.obtenerPortfolio(parametro).subscribe(data=>{
      this.miTrabajos = data.portfolio;
     // console.log(this.miTrabajos);
        });
      });
    }
  
  }
