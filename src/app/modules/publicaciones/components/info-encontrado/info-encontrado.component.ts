import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-encontrado',
  templateUrl: './info-encontrado.component.html',
  styleUrls: ['./info-encontrado.component.css']
})
export class InfoEncontradoComponent implements OnInit {

  publicationEncontrados: any[] = [];

  constructor(private PublicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.getPublicacionesEncontrados();
  }


  getPublicacionesEncontrados(){

    this.PublicacionesService.getPublicacionesEncontrados()
      .subscribe( (data:any) => {
        console.log("encontrados",data);;
        console.log(data.data.rows[1].id);
        this.publicationEncontrados = data.data.rows;
      },
        (error: any) => {
          console.log("error", error)
  
  
        })
      
      


  }

}
