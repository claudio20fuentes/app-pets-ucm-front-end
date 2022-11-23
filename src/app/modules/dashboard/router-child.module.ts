import { PublicacionesAdopcionComponent } from './../publicaciones/components/publicaciones-adopcion/publicaciones-adopcion.component';
import { PublicacionesComponent } from './../publicaciones/components/publicaciones/publicaciones.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'view-adopcion', component: PublicacionesAdopcionComponent },
    

    
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})


export class RouterChildModule { }
