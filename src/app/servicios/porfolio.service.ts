import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
  
})
export class PorfolioService {
  ubicacion='portfolionhg.fly.dev';
  url:string = "https://"+this.ubicacion+"/portfolio/";//localhost:8080
  urlEditar: string ="https://"+this.ubicacion+"/persona/crear";
  urlEditarMain : string = "https://"+this.ubicacion+"/main/crear";
  urlEditarHabilidad :string = "https://"+this.ubicacion+"/habilidades/modificar/";
  urlBorrarHabilidad :string = "https://"+this.ubicacion+"/habilidad/borrar/";
  urlCrearHabilidad :string = "https://"+this.ubicacion+"/habilidad/crear/";
            
  constructor(private http:HttpClient,) {}
   

  obtenerDatos():Observable<any>
  { 

    return  this.http.get<any>(this.url);
    
  }

  obtenerPortfolio(parametro:string):Observable<any>
  { 

    return  this.http.get<any>(this.url+parametro);
    
  }

  editarPersona(credenciales:any):Observable<any>
   {
      return this.http.post<any>(this.urlEditar,credenciales);
   }

   editarMain(credenciales:any):Observable<any>
   {
      return this.http.post<any>(this.urlEditarMain,credenciales);
   }

   editarHabilidad(credenciales:any,parametro:any):Observable<any>
   {
    return this.http.post<any>(this.urlEditarHabilidad+parametro,credenciales);
   }

   borrarHabilidad(parametro:number):Observable<any>
   {
    return this.http.get<any>(this.urlBorrarHabilidad+parametro);
   }
   crearHabilidad(parametro:string,credenciales:any):Observable<any>
   {
    return this.http.post<any>(this.urlCrearHabilidad+parametro,credenciales);
   }

  
}
