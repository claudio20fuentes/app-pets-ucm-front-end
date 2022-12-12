import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-form-adopcion',
  templateUrl: './form-adopcion.component.html',
  styleUrls: ['./form-adopcion.component.css']
})
export class FormAdopcionComponent implements OnInit {

  constructor(private formService: PublicacionesService) { }

  ngOnInit(): void {
  }

}
