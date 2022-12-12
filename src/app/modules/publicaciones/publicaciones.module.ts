import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicacionesAdopcionComponent } from './components/publicaciones-adopcion/publicaciones-adopcion.component';
import { InfoAdopcionComponent } from './components/info-adopcion/info-adopcion.component';
import { PublicacionesExtraviadosComponent } from './components/publicaciones-extraviados/publicaciones-extraviados.component';
import { InfoExtraviadoComponent } from './components/info-extraviado/info-extraviado.component';
import { InfoEncontradoComponent } from './components/info-encontrado/info-encontrado.component';
import { PublicacionesEncontradosComponent } from './components/publicaciones-encontrados/publicaciones-encontrados.component';
import { FormEncontradoComponent } from './components/form-encontrado/form-encontrado.component';
import { FormExtraviadoComponent } from './components/form-extraviado/form-extraviado.component';
import { FormAdopcionComponent } from './components/form-adopcion/form-adopcion.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormNewPublicacionComponent } from './components/form-new-publicacion/form-new-publicacion.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


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
    FormAdopcionComponent,
    FormNewPublicacionComponent,



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
    FormAdopcionComponent,
    FormNewPublicacionComponent,
    MaterialModule 

  ],  
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ] 
})
export class PublicacionesModule { 


}
