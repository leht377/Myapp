import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public urlServer = environment.url + '/usuarios';
  constructor(
    public http: HttpClient
  ) { 
   
  }
  create(data: Login){
    return this.http.post<Usuario>(this.urlServer,data).subscribe();
  }
}

