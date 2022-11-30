import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { PublicacionesService } from '../../services/publicaciones.service';
import { InfoAdopcionComponent } from '../info-adopcion/info-adopcion.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})

export class PublicacionesComponent implements OnInit {
  //eople2: any[] = [];
  publications: any[] = [];

  constructor(private publicacionesServices: PublicacionesService) {}

  ngOnInit(): void {
   //Metodo que se ejecuta al cargar el componente
   //devuelve un json desde la api con publicaciones  
   this.getPublicaciones();    
  }
  
  getPublicaciones(){

    this.publicacionesServices.getPublicaciones()
      .subscribe( (data:any) => {
         console.log("respuesta vacia?: ", data);
         
         console.log(data.data.rows[1].id);

         this.publications = data.data.rows;
         
         //codigo para user
         //console.log(data.data.rows[1].userdata.id);
         //this.people2 = data.data.rows; 
          //this.people2 = JSON.parse(data.data.rows); 
          //console.log(typeof this.people2);
      }, (error: any) => {
        console.log("error: ", error);
       
      })      

  }
}
