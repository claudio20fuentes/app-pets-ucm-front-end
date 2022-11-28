import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-info-adopcion',
  templateUrl: './info-adopcion.component.html',
  styleUrls: ['./info-adopcion.component.css']
})
export class InfoAdopcionComponent implements OnInit {


  publicationAdoption: any[] = [];
  publicationAdoptionId: any[] = [];

  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {
    this.getPublicacionesPorId(3);
    this.getPublicacionesAdopciones();
    
  }

  //MÉTODO QUE TRAE PUBLICACIONES POR ID TIPO PUBLICACIÓN
  getPublicacionesAdopciones(){

    this.publicacionesServices.getPublicacionesAdopciones()
      .subscribe( (data:any) => {
        console.log("respuesta vacia?: ", data);
        console.log(data.data.rows[1].id);
        this.publicationAdoption = data.data.rows;

      },(error: any) => {
        console.log("error", error)


      })
  }

  //MÉTODO QUE TRAE una publicacion por id
  getPublicacionesPorId(id:number){
    this.publicacionesServices.getPublicacionesPorId(id)
      .subscribe( (data:any) => {
        console.log("respuesta id?: ", data);
        this.publicationAdoptionId = data.data.rows;

      },(error: any) => {
        console.log("error", error)
      })
  }


}
