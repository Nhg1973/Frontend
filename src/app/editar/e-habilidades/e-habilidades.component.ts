import { Component, Input, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-e-habilidades',
  templateUrl: './e-habilidades.component.html',
  styleUrls: ['./e-habilidades.component.css']
})
export class EHabilidadesComponent implements OnInit {
  form: FormGroup;
  session:any="";
  miHabilidad:any;
  credenciales={id: 0,lenguaje: "",progreso: 0};
  credencialesEditar={lenguaje:"",progreso:0};
  nombre:any="";
 

  constructor(private servioPortfolio: PorfolioService,
    private datosPorfolio: PorfolioService,
    private formBuilder: FormBuilder,
    private ruta: Router,
   
     ) { 
      this.form=this.formBuilder.group(
        {
          valor:[null,],
          nuevaHabilidad:[null,],
          nuevoValor:[null,]
        }); 
        
     }

  ngOnInit(): void {
    this.session = sessionStorage.getItem('currentUser');
    var sessionJson = JSON.parse(this.session);
    this.datosPorfolio.obtenerPortfolio(sessionJson.nombreUsuario).subscribe(data=>{
    this.miHabilidad = data.habilidades;
    this.miHabilidad.nombre = this.session;
    this.nombre=  sessionStorage.getItem('nombreUsuario');
     
    
    });
    }

    get Valor()
    {
      return this.form.get('valor');
    }

    get nuevaHabilidad()
    {
      return this.form.get('nuevaHabilidad');
    }

    get nuevoValor()
    {
      return this.form.get('nuevoValor');
    }

    onEnviar(event:Event, Ehabilidad: string)
     {
     
      this.credenciales.id = parseInt(Ehabilidad);
      this.credenciales.progreso=this.Valor?.value;
      if(this.Valor?.value!=0){
        this.servioPortfolio.editarHabilidad(this.credenciales,parseInt(Ehabilidad)).subscribe(data=>{
          //alert("DATA :"+JSON.stringify(data));
          //this.ruta.navigate(['/persona/'+ this.form.get('nombreUsuario')?.value]);
          this.Valor?.setValue(null);
          this.ngOnInit();
        })
        
      }

    }

    offEnviar(event:Event, Bhabilidad: string)
    {
      var id = parseInt(Bhabilidad);
      this.servioPortfolio.borrarHabilidad(id).subscribe(data=>{     
        this.ngOnInit();
      })
      
    }

    creaHabilidad(event:Event)
    {
    
      this.credencialesEditar.lenguaje=this.nuevaHabilidad?.value;
      this.credencialesEditar.progreso=this.nuevoValor?.value;
      this.servioPortfolio.crearHabilidad(this.nombre,this.credencialesEditar).subscribe(data=>{
      this.form.reset();
      this.ngOnInit();
  
      })
    
    }


    

}
