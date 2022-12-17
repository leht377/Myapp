import { Component, OnInit } from '@angular/core';
import { Peliculavideojuegos } from '../models/peliculavideojuegos';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  public peliculas: Peliculavideojuegos[]=[];

  constructor() { 
    let user = new Usuario();
    let userdata = {id: 1, nombre:'Fundador',email:'fundador@co' };
    user.setValues(userdata);
    let pelicula = new Peliculavideojuegos();
    let data = {id: 1, titulo: 'La Huérfana: el origen', descripcion: 'lorem', imagen: 'assets/img/huerfana2.png', tipo: 'pelicula' , usuario:user}
    pelicula.setValues(data)
    this.peliculas.push(pelicula)
  }

  ngOnInit() {
  }

}
