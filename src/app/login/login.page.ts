import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup

  constructor(public fb: FormBuilder) { 

  this.formulariologin= this.fb.group ({
    'nombre': new FormControl("",Validators.required),
  'password': new FormControl("",Validators.required),

  })
  }
  ngOnInit() {
  }
Ingresar(){
  var f = this.formulariologin.value;

  var usuario = JSON.parse(localStorage.getItem('usuario'));

  if(usuario.nombre == f.nombre && usuario.password == f.password){
    console.log('Listo compa')
  }
}
}
