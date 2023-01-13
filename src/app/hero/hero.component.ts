import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  miPortfolio:any;

  constructor(private activatedRoute: ActivatedRoute,
    private datosPortfolio: PorfolioService) { }
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
    const parametro: any =  this.activatedRoute.snapshot.params['id'];  
    this.datosPortfolio.obtenerPortfolio(parametro).subscribe(data=>{
      this.miPortfolio = data;
    //console.log(this.miPortfolio)
      });
    });
  }

}
