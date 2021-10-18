import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campos }   from '../data/Data';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  formulario : FormGroup;
  form : any[];
  constructor(public fb: FormBuilder) {
    this.form = Campos;
   }

  ngOnInit(): void {
   this.crearFormulario();
  this.anadirForm();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      FormCreado: this.fb.array([])
    });
  }

  get FormularioCreado(): FormArray {
    return this.formulario.get('FormCreado') as FormArray;
  }

  anadirForm() {
    const trabajo = this.fb.group({
      id:     new FormControl(''),
      nombre: new FormControl(''),
    });

    this.FormularioCreado.push(trabajo);
  }


  borrarTrabajo(indice: number) {
    this.FormularioCreado.removeAt(indice);
  }
}
