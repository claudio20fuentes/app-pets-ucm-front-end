import { FormExtraviadoComponent } from './../publicaciones/components/form-extraviado/form-extraviado.component';
import { FormEncontradoComponent } from './../publicaciones/components/form-encontrado/form-encontrado.component';
import { InfoExtraviadoComponent } from './../publicaciones/components/info-extraviado/info-extraviado.component';
import { InfoEncontradoComponent } from './../publicaciones/components/info-encontrado/info-encontrado.component';
import { PublicacionesExtraviadosComponent } from './../publicaciones/components/publicaciones-extraviados/publicaciones-extraviados.component';
import { PublicacionesEncontradosComponent } from './../publicaciones/components/publicaciones-encontrados/publicaciones-encontrados.component';
import { PublicacionesAdopcionComponent } from './../publicaciones/components/publicaciones-adopcion/publicaciones-adopcion.component';
import { PublicacionesComponent } from './../publicaciones/components/publicaciones/publicaciones.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoAdopcionComponent } from '../publicaciones/components/info-adopcion/info-adopcion.component';
import { FormAdopcionComponent } from '../publicaciones/components/form-adopcion/form-adopcion.component';

const childRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    //{ path: 'home', component: HomeComponent },
    { path: 'view-adopcion', component: PublicacionesAdopcionComponent },
    { path: 'view-encontrados', component: PublicacionesEncontradosComponent },
    { path: 'view-extraviados', component: PublicacionesExtraviadosComponent },
    { path: 'view-info-adopcion', component: InfoAdopcionComponent },
    { path: 'view-info-encontrado', component: InfoEncontradoComponent},
    { path: 'view-info-extraviado', component: InfoExtraviadoComponent },
    { path: 'view-form-adopcion', component: FormAdopcionComponent },
    { path: 'view-form-encontrado', component: FormEncontradoComponent },
    { path: 'view-form-extraviado', component: FormExtraviadoComponent },
    { path: 'app-publicaciones', component: PublicacionesComponent}   
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})


export class RouterChildModule { }
