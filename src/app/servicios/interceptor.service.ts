import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacioServis: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    var token=sessionStorage.getItem('token');

    if (!token) {
        return next.handle(req);
      }
      const headers = req.clone({
        headers: req.headers.set('Authorization',token)
      });
      return next.handle(headers);
  }
}



