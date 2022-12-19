import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Peliculavideojuegos } from '../models/peliculavideojuegos';

@Injectable({
  providedIn: 'root'
})
export class PeliculayvideojuegosService {

  public urlServer = environment.url + '/peliculavideojuegos';
  constructor(
    public http: HttpClient
  ) {

  }
  create(data: Peliculavideojuegos){
    return this.http.post<Peliculavideojuegos>(this.urlServer,data).subscribe();
  }
}
