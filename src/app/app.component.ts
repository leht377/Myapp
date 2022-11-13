import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio ', url: '/folder/Inicio', icon: 'home' },
    { title: 'Mis calificaciones', url: '/folder/calificaciones', icon: 'star-half' },
    { title: 'Peliculas', url: '/folder/Peliculas', icon: 'film' },
    { title: 'Videojuegos ', url: '/folder/Videojuegos', icon: 'game-controller' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
 
  constructor() {}
}
