import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  submit: boolean=false;

  public login: Login;

  constructor(public fb: FormBuilder, public alertController: AlertController, 
    public navControl:NavController, public menuCtrl: MenuController, public UsuarioService: UsuarioService) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required),
      'confirmacionPassword': new FormControl(null,Validators.required),
      'rol': new FormControl(null,Validators.required)
    },
    {
      validators: this.Match('password','confirmacionPassword')
    })
  }

  get f(){return this.formularioRegistro.controls}

  Match(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.confirmedMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  async guardar(){
   
    this.submit= true;


    if(this.formularioRegistro.invalid){
      // const alert = await this.alertController.create({
      //   header: 'Formulario Incompleto',
      //   message: 'Debes llenar todos los datos',
      //   buttons: ['Aceptar'],
        
      // });
  
      // await alert.present();
      return;
    }

    var f = this.formularioRegistro.value;
    let data = {nombre: f.nombre, password: f.password, rol: f.rol};

    this.login = new Login();
    this.login.setValues(data);
    this.UsuarioService.create(this.login)
    // var usuario ={
    //   nombre: f.nombre,
    //   password: f.password,
    //   rol: f.rol
    // }

    // localStorage.setItem('usuario', JSON.stringify(usuario));
    // this.navControl.navigateRoot('/login')

  }
}
