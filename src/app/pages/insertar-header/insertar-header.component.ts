import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalServiceService } from 'src/app/services/swal-service.service';
import { Datos }  from '../../data/Data';
 
@Component({
  selector: 'app-insertar-header',
  templateUrl: './insertar-header.component.html',
  styleUrls: ['./insertar-header.component.css']
})
export class InsertarHeaderComponent implements OnInit {

   formulario: FormGroup ;
   public Validacion      : boolean = false;
   public Valor           : number;
   public posicionAcciones: number;
  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ,public swal : SwalServiceService,
  public dialogRef: MatDialogRef< InsertarHeaderComponent >) {

   
     }

  ngOnInit(): void {
   this.initForm();
    if (this.data.id != 0 ){
      this.formulario.patchValue ({
        nombre : this.data.nombre,
        descripcion : this.data.descripcion
    })
   }else{
  }
}

ActualizarValores(){
  if (this.data.id ){
    Datos.find(item =>{
      if (item.id == this.data.id){
        item.nombre      = this.formulario.value.nombre;
        item.descripcion = this.formulario.value.descripcion;
        this.swal.mensajeSimple("","Actualizado Correctamente","success");
        this.dialogRef.close();
    }else{
    }
    })
  }else{
    this.InsertarValores();
  }
}


InsertarValores(){
 this.Valor =  Object.keys(Datos).length;

  Datos.push({
    id : (this.Valor+1),
    nombre:       this.formulario.value.nombre,
    descripcion : this.formulario.value.descripcion,
  });
  this.swal.mensajeSimple("","Insertado Correctamente","success");
  this.dialogRef.close();
}


  public initForm():void{
    this.formulario = this.fb.group({
      nombre      : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]), 
      descripcion      : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]), 
    })
  }
}
