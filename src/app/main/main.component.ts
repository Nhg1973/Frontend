import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  miMain:any;

  constructor(private activatedRoute: ActivatedRoute,
    private datosPortfolio: PorfolioService) { }
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
    const parametro: any =  this.activatedRoute.snapshot.params['id'];  
    this.datosPortfolio.obtenerPortfolio(parametro).subscribe(data=>{
    this.miMain = data.main;
    //console.log(this.miMain)
      });
    });
  }

}
