import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 

  constructor(private activatedRoute: ActivatedRoute,
    private datosPortfolio: PorfolioService) { }

  ngOnInit(): void {
 

    }

 
  }
