import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones-extraviados',
  templateUrl: './publicaciones-extraviados.component.html',
  styleUrls: ['./publicaciones-extraviados.component.css']
})
export class PublicacionesExtraviadosComponent implements OnInit {
  publicationExtraviados: any[] = [];
  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {

    this.getPublicacionesExtraviados();
    
  }

  getPublicacionesExtraviados(){

    this.publicacionesServices.getPublicacionesExtraviados()
    .subscribe( (data:any) =>{
      console.log("respuesta vacia?: ", data);
         
      console.log(data.data.rows[1].id);

      this.publicationExtraviados = data.data.rows;
      
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
