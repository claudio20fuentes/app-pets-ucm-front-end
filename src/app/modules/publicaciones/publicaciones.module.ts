import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { RouterModule } from '@angular/router';
import { PublicacionesAdopcionComponent } from './components/publicaciones-adopcion/publicaciones-adopcion.component';
import { InfoAdopcionComponent } from './components/info-adopcion/info-adopcion.component';
import { PublicacionesExtraviadosComponent } from './components/publicaciones-extraviados/publicaciones-extraviados.component';
import { InfoExtraviadoComponent } from './components/info-extraviado/info-extraviado.component';
import { InfoEncontradoComponent } from './components/info-encontrado/info-encontrado.component';
import { PublicacionesEncontradosComponent } from './components/publicaciones-encontrados/publicaciones-encontrados.component';
import { FormEncontradoComponent } from './components/form-encontrado/form-encontrado.component';
import { FormExtraviadoComponent } from './components/form-extraviado/form-extraviado.component';
import { FormAdopcionComponent } from './components/form-adopcion/form-adopcion.component';



@NgModule({
  declarations: [
    PublicacionesComponent,
    PublicacionesAdopcionComponent,
    InfoAdopcionComponent,
    PublicacionesExtraviadosComponent,
    InfoExtraviadoComponent,
    InfoEncontradoComponent,
    PublicacionesEncontradosComponent,
    FormEncontradoComponent,
    FormExtraviadoComponent,
    FormAdopcionComponent
  ],  
  exports: [
    PublicacionesComponent,
    PublicacionesAdopcionComponent,

    InfoAdopcionComponent,
    PublicacionesExtraviadosComponent,
    InfoExtraviadoComponent,
    InfoEncontradoComponent,
    PublicacionesEncontradosComponent,
    FormEncontradoComponent,
    FormExtraviadoComponent,
    FormAdopcionComponent
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
