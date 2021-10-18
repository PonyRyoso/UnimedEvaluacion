import { Component } from '@angular/core';
import { headers } from './Models/Propiedades';
import { MatDialog } from '@angular/material/dialog';
import { InsertarHeaderComponent } from './pages/insertar-header/insertar-header.component';
import { titulos, Datos } from './data/Data';
import { TitulosComponent } from './pages/titulos/titulos.component';
import { SwalServiceService } from './services/swal-service.service';
import { PruebaComponent } from './prueba/prueba.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UNIMED';
  
  
  public Elementos ;

  public Titulos ;

  public NuevoArreglo : headers[];
  constructor( public Modal: MatDialog, public swal : SwalServiceService){
    this.Titulos = titulos;
    this.Elementos = Datos;
  }

  ordenarArreglo(){
    for (let i=0; i < titulos.length; i++){
      if ( titulos[i].nombre == "Acciones"){
        
      }else{
          var temporal = titulos[i+1].nombre;
          titulos[i+1].nombre = titulos[i].nombre;
          titulos[i].nombre = temporal;
      }
  }

  }

EdicionDatos(id?:any,nombre?:string, descripcion?:string) {
  if ( id != 0) {
    const dialogRef = this.Modal.open(InsertarHeaderComponent, { 
      height:   '42vh',
      width:    '42vw',
      maxWidth: '42vw',
      data: {id,nombre,descripcion}, 
      disableClose: false,
      panelClass: 'app-full-bleed-dialog'
    });
  }else{
    const dialogRef = this.Modal.open(InsertarHeaderComponent, { 
      height:   '42vh',
      width:    '42vw',
      maxWidth: '42vw',
      data:  {}  ,
      disableClose: false,
      panelClass: 'app-full-bleed-dialog'
    });
    
  }
  }

  Modaltitulos(data?:any) {
  
    const dialogRef = this.Modal.open( TitulosComponent, { 
      height:   '55vh',
      width:    '55vw',
      maxWidth: '55vw',
        data: data, 
        disableClose: false,
        panelClass: 'app-full-bleed-dialog'
      });
    }


 EliminarCampo( id : number){
  for (let i=0; i < Datos.length; i++){
    if ( Datos[i].id == id){
      Datos.splice(i,1);
    }
    this.swal.mensajeSimple("","Eliminado Correctamente","success");

      }
 }

 ModalPrueba(){
const dialogRef = this.Modal.open( PruebaComponent, { 
      height:   '50vh',
      width:    '50vw',
      maxWidth: '50vw',
        disableClose: false,
        panelClass: 'app-full-bleed-dialog',
        backdropClass: 'backdropBackground'
      });
 }
}




