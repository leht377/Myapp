import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.page.html',
  styleUrls: ['./cargar.page.scss'],
})
export class CargarPage implements OnInit {

  formularioSubir: FormGroup;

  constructor(public fb: FormBuilder, public navControl:NavController) {
    this.formularioSubir = this.fb.group({
      'titulo': new FormControl(null,Validators.required),
      'descripcion': new FormControl(null,Validators.required),
      'tipo': new FormControl(null,Validators.required),
    
    })
   }

  ngOnInit() {
  }

}
