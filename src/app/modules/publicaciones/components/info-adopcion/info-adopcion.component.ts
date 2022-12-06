import { Component, Input, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-info-adopcion',
  templateUrl: './info-adopcion.component.html',
  styleUrls: ['./info-adopcion.component.css']
})
export class InfoAdopcionComponent implements OnInit {

  @Input() id: Number=0;
  publicationAdoption: any[] = [];
  publicationAdoptionId: any[] = [];
  

  publicationw = {

    animal: {
      categoriaMascotaId: Number,
      createdAt: Date,
      edad: {
        años: Number,
        createdAt: Date,
        id:Number,
        updateAt: Date
      },
      raza: {
        createdAt: Date,
        id:Number,
        nombre: String,
        updateAt: Date 
      },
      sexo: {
        createdAt: Date,
        id:Number,
        nombre:String,
        updateAt: Date
      },
      edadId: Number,
      id: Number,
      nombre: Number,
      razaId: Number,
      sexoId: Number,
      updatedAt: Date
    },
    comuna:{
      ciudadId: Number,
      createdAt: Date,
      id: Number,
      nombre: String,
      updateAt: Date
    },

    id: Number,
    titulo: String,
    descripcion: String,
    cratedAt: Date,
    updatedAt: Date,
    userId: Number,
    categoriaPublicacionId: Number,
    estadoId: Number,
    animalId: Number,
    comunaId: Number,

    images: [{
      createdAt: Date,
      id: Number,
      publicacionId: Number,
      regular: String,
      square: String,
      updatetedAt: String  
    }],
    
    user: {
      contrasena: String,
      correo: String,
      createdAd: String,
      estadoId: Number,
      id: Number,
      updatedAt: Date,
      userDataId: Number,

      userdata: {
        apellido_materno: String,
        apellido_paterno: String,
        createdAt: Date,
        direccionId: Number,
        id: Number,
        nombre: String,
        telefonoId: Number,
        updatedAt: Date,
        
        direccion:{
          comunaId: Number,
          createdAt: String,
          id: Number,
          nombre: String,
          numero: Number,
          updatedAt: Date
        },
        telefono:{
          createdAt: Date,
          id: Number,
          numero: Number,
          updatedAt: Date
        }
      },
    }
  }

  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {
    this.getPublicacionesPorId(3);
    this.getPublicacionesAdopciones();   
  }

  //MÉTODO QUE TRAE PUBLICACIONES POR ID TIPO PUBLICACIÓN
  getPublicacionesAdopciones(){

    this.publicacionesServices.getPublicacionesAdopciones()
      .subscribe( (data:any) => {
        //console.log("Data de distintas publicaciones: ", data);
        //console.log(data.data.rows[1].id);
        this.publicationAdoption = data.data.rows;
      },(error: any) => {
        console.log("error", error)
      })
  }
  //MÉTODO QUE TRAE una publicacion por id
  getPublicacionesPorId(id:number){
    this.publicacionesServices.getPublicacionesPorId(id)
      .subscribe( (data:any) => {
        console.log("Data por id: ", data.data);
        this.publicationw = data.data;
        console.log(this.publicationw.animal.edad.años);
        //console.log(this.publicationw.titulo);
        //console.log(this.publicationw.descripcion);

        //console.log(this.publicationw.user.userdata.nombre);
        //console.log(this.publicationw.user.userdata.apellido_materno);
        //console.log(this.publicationw.user.userdata.apellido_paterno);

        //console.log(this.publicationw.user.correo);
        //console.log(this.publicationw.user.userdata.telefono.numero);

        //console.log(this.publicationw.animal.nombre);
        //console.log(this.publicationw.animal);
        //console.log(this.publicationw.animal.nombre);

        //console.log(this.publicationw.user.userdata.direccion.nombre);
        //console.log(this.publicationw.user.userdata.direccion.numero);
        //console.log(this.publicationw.images[0].regular);
      },(error: any) => {
        console.log("error", error)
      })
  }
}
