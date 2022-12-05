import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-info-extraviado',
  templateUrl: './info-extraviado.component.html',
  styleUrls: ['./info-extraviado.component.css']
})
export class InfoExtraviadoComponent implements OnInit {

  publicationExtraviado: any[] = [];
  publicacionExtraviadoId = {
    id: Number,
    titulo: String,
    descripcion: String,
    cratedAt: Date,
    updatedAt: Date,
    userId: Number,
    categoriaPublicacionId: Number,
    estadoId: Number,
    animalId: Number,
    comunaId: Number  
  }

  constructor(private PublicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.getPublicacionesExtraviados();
  }

  getPublicacionesExtraviados(){
      this.PublicacionesService.getPublicacionesExtraviados()
        .subscribe( (data:any) => {
          console.log("respuesta vacia?: ", data);
          console.log(data.data.rows[1].id);
          this.publicationExtraviado = data.data.rows;
        },(error: any) => {
          console.log("error", error)
  })
  }

  getPublicacionesPorIdExtraviados(id:number){
    this.PublicacionesService.getPublicacionesPorIdExtraviados(id)
    .subscribe( ( data:any ) => {
      console.log("Data por id extraviados", data.data);
      this.publicacionExtraviadoId = data.data;
      console.log(this.publicacionExtraviadoId);
    },(error: any) => {
      console.log("error",error)
    }) 
  }
}
