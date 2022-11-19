import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  submit: boolean=false;

  constructor(public fb: FormBuilder, public alertController: AlertController, 
    public navControl:NavController) { 
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

  async guardar(){
    this.submit= true;
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      // const alert = await this.alertController.create({
      //   header: 'Formulario Incompleto',
      //   message: 'Debes llenar todos los datos',
      //   buttons: ['Aceptar'],
        
      // });
  
      // await alert.present();
      return;
    }
    var usuario ={
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.navControl.navigateRoot('/login')

  }
}
