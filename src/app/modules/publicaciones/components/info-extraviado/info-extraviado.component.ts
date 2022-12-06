import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-info-extraviado',
  templateUrl: './info-extraviado.component.html',
  styleUrls: ['./info-extraviado.component.css']
})
export class InfoExtraviadoComponent implements OnInit {


  idEx: any;

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

  publicationId = {

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

  constructor(private PublicacionesService: PublicacionesService , private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.rutaActiva.snapshot.paramMap.get('id'));
    this.idEx = this.rutaActiva.snapshot.paramMap.get('id');
    this.getPublicacionesExtraviados();
    this.getPublicacionesPorIdExtraviados(this.idEx);
    console.log("fdwsfsegreherhrewkjwgkwehehwlehwlhewhwehlewlkh");
    console.log(this.rutaActiva); 
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
      this.publicationId = data.data;
      console.log(this.publicationId);
    },(error: any) => {
      console.log("error",error)
    }) 
  }
}
