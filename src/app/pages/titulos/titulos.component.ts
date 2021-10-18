import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { headers } from 'src/app/Models/Propiedades';
import { SwalServiceService } from 'src/app/services/swal-service.service';
import { Campos, titulos } from '../../data/Data';
import { EditartitulosComponent } from '../editartitulos/editartitulos.component';
import { InsertarHeaderComponent } from '../insertar-header/insertar-header.component';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  public Titulos;
  constructor( public Modal : MatDialog, public swal: SwalServiceService) {
    this.Titulos = titulos;
   }

  ngOnInit(): void {
  }



EditarDatos(id: number ,nombre: string,tipo: string){
  const dialogRef = this.Modal.open(EditartitulosComponent, { 
    height:   '36vh',
    width:    '36vw',
    maxWidth: '36vw',
    data: {id,nombre,tipo}, 
    disableClose: false,
    panelClass: 'app-full-bleed-dialog'
  });
}


Modaltitulos(id ?: number, nombre ?: string ){
  const dialogRef = this.Modal.open(EditartitulosComponent, { 
    height:   '36vh',
    width:    '36vw',
    maxWidth: '36vw',
    data: {id , nombre}, 
    disableClose: false,
    panelClass: 'app-full-bleed-dialog'
  });
}

EliminarCampo( id : number, nombre : string){
  titulos.splice((id-1),1);
  this.EliminarObjeto(nombre);
  this.swal.mensajeSimple("","Eliminado Correctamente","success");
 }


EliminarObjeto(nombre : string){  
  for (let i=0; i < Campos.length; i++){
    if ( Campos[i].nombre == nombre){
      Campos.splice(i,1);
    }
}
  }
}