import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mis calificaciones', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Peliculas', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Videojuegos ', url: '/folder/Favorites', icon: 'heart' },
    { title: 'no se que mas jJajajaj ', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
