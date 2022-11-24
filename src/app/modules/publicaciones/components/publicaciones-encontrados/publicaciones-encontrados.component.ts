import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-encontrados',
  templateUrl: './publicaciones-encontrados.component.html',
  styleUrls: ['./publicaciones-encontrados.component.css']
})
export class PublicacionesEncontradosComponent implements OnInit {
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
