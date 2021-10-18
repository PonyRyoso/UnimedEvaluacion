import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule   } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule   } from '@angular/material/card';

import { ReactiveFormsModule , } from '@angular/forms';
import { MatDialogModule}  from '@angular/material/dialog';
import { InsertarHeaderComponent } from './pages/insertar-header/insertar-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitulosComponent } from './pages/titulos/titulos.component';
import { EditartitulosComponent } from './pages/editartitulos/editartitulos.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarHeaderComponent,
    TitulosComponent,
    EditartitulosComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports : [
    MatIconModule,
    MatInputModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
