import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeliculayvideojuegosService {

  public urlServer = environment.url + '/peliculavideojuegos';
  constructor(
    public http: HttpClient
  ) { 
   
  }
}
