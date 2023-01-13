import { Component, Input, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  form: FormGroup;
  session:any="";
  miPersona:any;

  constructor(private servioPortfolio: PorfolioService,
              private datosPorfolio: PorfolioService,
              private formBuilder: FormBuilder,
              private ruta: Router
               ) { 
                this.form=this.formBuilder.group(
                  {
                    nombreUsuario:['',[Validators.required,Validators.minLength(5)]],
                    apellidoUsuario:['',[Validators.required,Validators.minLength(5)]],
                    jobtitleUsuario:['',[Validators.required,Validators.minLength(5)]],
                    portfolioUsuario:['',[Validators.required,Validators.minLength(5)]],
                    contactUsuario:['',[Validators.required,Validators.minLength(5)]],
                    
                  
                  }); 
               }

  ngOnInit(): void {
    this.session = sessionStorage.getItem('currentUser');
    console.log(this.session); 
    var sessionJson = JSON.parse(this.session);
    this.datosPorfolio.obtenerPortfolio(sessionJson.nombreUsuario).subscribe(data=>{
    this.miPersona = data;
    this.form.controls['nombreUsuario'].setValue(this.miPersona.nombre);
    this.form.controls['apellidoUsuario'].setValue(this.miPersona.apellido);
    this.form.controls['jobtitleUsuario'].setValue(this.miPersona.jobtitle);
    this.form.controls['portfolioUsuario'].setValue(this.miPersona.portfolios);
    this.form.controls['contactUsuario'].setValue(this.miPersona.contact);
   
    console.log(this.miPersona); 
    });
  }

 
  

  get NombreUsuario()
  {
    return this.form.get('nombreUsuario');
  }

  get ApellidoUsuario()
  {
    return this.form.get('apellidoUsuario');
  }

  get JobtitleUsuario()
  {
    return this.form.get('jobtitleUsuario');
  }

  get PortfolioUsuario()
  {
    return this.form.get('portfolioUsuario');
  }

  get ContactUsuario()
  {
    return this.form.get('contactUsuario');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;

    this.miPersona.nombre =this.form.controls['nombreUsuario'].value;
    this.miPersona.apellido =this.form.controls['apellidoUsuario'].value;
    this.miPersona.jobtitle =this.form.controls['jobtitleUsuario'].value;
    this.miPersona.portfolios =this.form.controls['portfolioUsuario'].value;
    this.miPersona.contact =this.form.controls['contactUsuario'].value;
    console.log("esto es miPersona" + this.miPersona);

    this.servioPortfolio.editarPersona(this.miPersona).subscribe(data=>{
    
      console.log("DATA :"+JSON.stringify(data));
      this.ruta.navigate(['/persona/'+ this.form.get('nombreUsuario')?.value]);
   
    })
  }
  
  
    
}



