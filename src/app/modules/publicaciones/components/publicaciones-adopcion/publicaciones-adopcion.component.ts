import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones-adopcion',
  templateUrl: './publicaciones-adopcion.component.html',
  styleUrls: ['./publicaciones-adopcion.component.css']
})
export class PublicacionesAdopcionComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
