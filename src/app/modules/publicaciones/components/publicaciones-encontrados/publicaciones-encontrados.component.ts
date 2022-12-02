import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones-encontrados',
  templateUrl: './publicaciones-encontrados.component.html',
  styleUrls: ['./publicaciones-encontrados.component.css']
})
export class PublicacionesEncontradosComponent implements OnInit {
  
  publicationEncontrados: any [] = [];
  
  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {

this.getPublicacionesEncontrados();

  }

  getPublicacionesEncontrados(){

    this.publicacionesServices.getPublicacionesEncontrados()
    .subscribe( (data:any) => {

      console.log("respuesta" , data);
      console.log(data.data.rows[1].id);

      this.publicationEncontrados = data.data.rows;
    }, (error: any) => {
      console.log("error: ", error);
    })
  }
}
