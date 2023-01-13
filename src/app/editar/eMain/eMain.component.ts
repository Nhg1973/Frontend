import { Component, Input, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eMain',
  templateUrl: './eMain.component.html',
  styleUrls: ['./eMain.component.css']
})
export class EMainComponent implements OnInit {
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
          titulo:['',[Validators.required,Validators.minLength(5)]],
          a:['',[Validators.required,Validators.minLength(5)]],
          p:['',[Validators.required,Validators.minLength(5)]],      
        }); 
     }

ngOnInit(): void {
this.session = sessionStorage.getItem('currentUser');
console.log(this.session); 
var sessionJson = JSON.parse(this.session);
this.datosPorfolio.obtenerPortfolio(sessionJson.nombreUsuario).subscribe(data=>{
this.miPersona = data.main;
this.form.controls['titulo'].setValue(this.miPersona.titulo);
this.form.controls['a'].setValue(this.miPersona.a);
this.form.controls['p'].setValue(this.miPersona.p);


console.log(this.miPersona); 
});
}

get Titulo()
{
return this.form.get('titulo');
}

get A()
{
return this.form.get('a');
}

get P()
{
return this.form.get('p');
}


onEnviar(event:Event)
{
event.preventDefault;

this.miPersona.titulo =this.form.controls['titulo'].value;
this.miPersona.a =this.form.controls['a'].value;
this.miPersona.p =this.form.controls['p'].value;

console.log("esto es miMain" + this.miPersona);

this.servioPortfolio.editarMain(this.miPersona).subscribe(data=>{

alert("DATA :"+JSON.stringify(data));
this.ruta.navigate(['/persona/'+ this.form.get('nombreUsuario')?.value]);

})
}



}

