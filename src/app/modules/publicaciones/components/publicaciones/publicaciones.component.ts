import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})

export class PublicacionesComponent implements OnInit {

  people = [

    {
      name: 'claudio',
      id: '12'
    },
    {
      name: 'fernando',
      id: '21'
    },
    {
      name: 'camila',
      id: '232'
    },
    {
      name: 'claudia',
      id: '12'
    },
    {
      name: 'fernanda',
      id: '21'
    },
    {
      name: 'camilo',
      id: '232'
    },
    {
      name: 'claudio',
      id: '12'
    },
    {
      name: 'fernando',
      id: '21'
    },
    {
      name: 'camila',
      id: '232'
    },
    {
      name: 'claudio',
      id: '12'
    },
    {
      name: 'fernando',
      id: '21'
    },
    {
      name: 'camila',
      id: '232'
    }
  ]

  people2: any[] = [];

  constructor(private publicacionesServices: PublicacionesService) {
    
   }

  ngOnInit(): void {
   //Metodo que se ejecuta al cargar el componente
   //devuelve un json desde la api con publicaciones  
   this.getPublicaciones();    
  }
  
  getPublicaciones(){

    this.publicacionesServices.getPublicaciones()
      .subscribe( (data:any) => {
         console.log("respuesta vacia?: ", data);
          this.people2 = JSON.parse(data.data.rows); 
          console.log(typeof this.people2);
      }, (error: any) => {
        console.log("error: ", error);
       
      })      

  }
}
