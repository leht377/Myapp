import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio ', url: '/inicio', icon: 'home' },
    { title: 'Mis calificaciones', url: '/calificaciones', icon: 'star-half' },
    { title: 'Peliculas', url: '/peliculas', icon: 'film' },
    { title: 'Videojuegos ', url: '/videojuegos', icon: 'game-controller' },
    { title: 'Trash', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
  ];

  public userName = JSON.parse(localStorage.getItem('usuario'));
 
  constructor(public navControl: NavController) {}

  logout(){
    this.navControl.navigateRoot('/login');
  }
}

