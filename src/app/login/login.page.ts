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

}
