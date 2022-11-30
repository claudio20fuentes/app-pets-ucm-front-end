import { PublicacionesService } from './../../services/publicaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-extraviado',
  templateUrl: './info-extraviado.component.html',
  styleUrls: ['./info-extraviado.component.css']
})
export class InfoExtraviadoComponent implements OnInit {

  publicationExtraviado: any[] = [];

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
}
