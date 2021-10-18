import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalServiceService } from 'src/app/services/swal-service.service';
import { titulos, Campos, Datos }  from '../../data/Data';

@Component({
  selector: 'app-editartitulos',
  templateUrl: './editartitulos.component.html',
  styleUrls: ['./editartitulos.component.css']
})
export class EditartitulosComponent implements OnInit {

  public formulario             :FormGroup;
  public valor                  : number;
  public posicionActualAcciones : number;
  constructor( public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any ,public swal : SwalServiceService,
  public dialogRef: MatDialogRef< EditartitulosComponent >) { }

  ngOnInit(): void {
    this.initForm();

    if (this.data.id ){
      this.formulario.patchValue ({
        nombre : this.data.nombre,
        descripcion : this.data.descripcion
    })
   }else{
  }
  }



  public initForm():void{
    this.formulario = this.fb.group({
      nombre      : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]), 
     })

     
  }

  InsertarValores(){
    this.valor =  Object.keys( titulos ).length;
    
     titulos.push({
       id : (this.valor+ 1),
       nombre:       this.formulario.value.nombre,
     });
   
     
  //    for (let i=0; i < titulos.length; i++){
  //     if ( titulos[i].nombre != "Acciones"){
        
  //     }else{
  //         var temporal = titulos[i+1].nombre;
  //         titulos[i+1].nombre = titulos[i].nombre;
  //         titulos[i].nombre = temporal;
  //     }
  // }


     this.InsertarCampo();
     this.swal.mensajeSimple("","Insertado Correctamente","success");
     this.dialogRef.close();
   }

   InsertarCampo(){
    this.valor =  Object.keys( Campos ).length;
     Campos.push({
       id : (this.valor + 1),
       nombre:       this.formulario.value.nombre,
       tipo :        "text"
     });
   }

   

   ActualizarValores(){
    if (this.data.id ){
      titulos.find(item =>{
        if (item.id == this.data.id){
          Campos.find( item2 => {
            if(item2.nombre == item.nombre ){
                item2.nombre = this.formulario.value.nombre;
            }
          })
          item.nombre = this.formulario.value.nombre;
         
          this.swal.mensajeSimple("","Actualizado Correctamente","success");
          this.dialogRef.close();
      }else{
      }
      })
    }else{
      this.InsertarValores();
    }
  }
}
