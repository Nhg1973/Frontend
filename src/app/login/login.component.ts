import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService} from 'src/app/servicios/autenticacion.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private autenticacionServicio: AutenticacionService, private ruta: Router  ) {
    this.form=this.formBuilder.group(
      {
        nombreUsuario:['',[Validators.required,Validators.minLength(5)]],
        password:['',[Validators.required,Validators.minLength(5)]]
      
      }
    )
   }

  ngOnInit(): void {
  }

  get NombreUsuario()
  {
    return this.form.get('nombreUsuario');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)

  {
    event.preventDefault;
    //console.log(this.form);
    
    this.autenticacionServicio.iniciarSesion(this.form.value).subscribe(data=>{

      //sessionStorage.setItem('token', JSON.stringify(data.token));
      //console.log("esto es "+JSON.stringify(data.token));
      //console.log("DATA:"+JSON.stringify(data.));
      //console.log(this.form.get('nombreUsuario')?.value);
    this.ruta.navigate(['/persona/'+ this.form.get('nombreUsuario')?.value]);
    })
  }

}
