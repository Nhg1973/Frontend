import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BehaviorSubject, Observable} from 'rxjs';
import{map}from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  ubicacion='portfolionhg.fly.dev';
  url="https://"+this.ubicacion+"/auth/login";//localhost:8080
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("El servicio esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||"{}"));
   }

   iniciarSesion(credenciales:any):Observable<any>
   {
    return this.http.post<any>(this.url,credenciales).pipe(map(data=>{
   
              
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      sessionStorage.setItem("nombreUsuario", data.nombreUsuario);
      let tokenStr = "Bearer " + data.token;
      sessionStorage.setItem("token", tokenStr);
      this.currentUserSubject.next(data);
      return data;

    }))
   }

   

   get UsuarioAutenticado()
   {
    return this.currentUserSubject.value;
   }
}
