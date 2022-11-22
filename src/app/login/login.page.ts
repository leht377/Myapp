import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup

  constructor(public fb: FormBuilder,
    public alertController: AlertController, public navControl: NavController
    ,public menuCtrl: MenuController) {

    this.formulariologin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),

    })
  }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  
  async Ingresar() {
    var f = this.formulariologin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      this.navControl.navigateRoot('/inicio');
    } else {
      const alert = await this.alertController.create({
        header: 'Incorrecto',
        message: 'Ingrese los datos correspondientes',
        buttons: ['Aceptar'],

      });

      await alert.present();
    }
  }
}
