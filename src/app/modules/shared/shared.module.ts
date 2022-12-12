import { PublicacionesComponent } from './../publicaciones/components/publicaciones/publicaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { MaterialModule } from './material.module';
import { PublicacionesModule } from '../publicaciones/publicaciones.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ListServicesComponent,
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    ListServicesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule ,
    PublicacionesModule

  ]
})
export class SharedModule { }
