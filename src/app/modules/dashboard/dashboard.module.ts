import { PublicacionesComponent } from './../publicaciones/components/publicaciones/publicaciones.component';
import { PublicacionesAdopcionComponent } from './../publicaciones/components/publicaciones-adopcion/publicaciones-adopcion.component';
import { HttpClientModule } from '@angular/common/http';
import { ListServicesComponent } from './../shared/components/list-services/list-services.component';
import { PublicacionesModule } from './../publicaciones/publicaciones.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PruebaModule } from './prueba/prueba.module';
@NgModule({
  declarations: [          //SE DECLARAN LOS COMPONENTES DEL MODULO DASHBOARD
    DashboardComponent,
    HomeComponent,
    ],

  imports: [               //IMPORTACIONES DE TODOS LOS MODULOS DE LA APLICACIÓN
    CommonModule,
    RouterModule,
    SharedModule,
    PublicacionesModule,
    HttpClientModule,
    PruebaModule
  ]
})
export class DashboardModule { }
