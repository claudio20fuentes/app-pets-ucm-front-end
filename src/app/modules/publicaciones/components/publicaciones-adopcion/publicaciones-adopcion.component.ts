import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-adopcion',
  templateUrl: './publicaciones-adopcion.component.html',
  styleUrls: ['./publicaciones-adopcion.component.css']
})

export class PublicacionesAdopcionComponent implements OnInit {

  publicationsAdoptions: any[] = [];

  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {

    this.getPublicacionesAdopciones();

  }
  getPublicacionesAdopciones(){

    this.publicacionesServices.getPublicacionesAdopciones()
    .subscribe( (data:any) => {
      console.log(data.data.rows[1].id);
      this.publicationsAdoptions = data.data.rows;
    },(error: any) =>{
      console.log("error: ", error);
     })

  }

}
