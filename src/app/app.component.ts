import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio ', url: '/inicio', icon: 'home' },
    { title: 'Mis calificaciones', url: '/calificaciones', icon: 'star-half' },
    { title: 'Peliculas', url: '/Peliculas', icon: 'film' },
    { title: 'Videojuegos ', url: '/Videojuegos', icon: 'game-controller' },
    { title: 'Trash', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
  ];
 
  constructor() {}
}
