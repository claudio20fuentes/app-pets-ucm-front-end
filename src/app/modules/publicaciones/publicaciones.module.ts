import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { RouterModule } from '@angular/router';
import { PublicacionesAdopcionComponent } from './components/publicaciones-adopcion/publicaciones-adopcion.component';



@NgModule({
  declarations: [
    PublicacionesComponent,
    PublicacionesAdopcionComponent
  ],  
  exports: [
    PublicacionesComponent,
    PublicacionesAdopcionComponent
  ],  
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ] 
})
export class PublicacionesModule { 


  people = {

    persona: {
      name: 'claudio',
      id: '12'
    },
    persona1: {
      name: 'fernando',
      id: '21'
    },
    persona2: {
      name: 'camila',
      id: '232'
    }
  }






}
