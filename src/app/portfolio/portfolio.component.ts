import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
    
  constructor(private activatedRoute: ActivatedRoute,
              private datosPortfolio: PorfolioService) { }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
     const parametro: any =  this.activatedRoute.snapshot.params['id'];  
     this.datosPortfolio.obtenerPortfolio(parametro).subscribe(data=>{
      //console.log(parametro);

      });
    });
  }

}
