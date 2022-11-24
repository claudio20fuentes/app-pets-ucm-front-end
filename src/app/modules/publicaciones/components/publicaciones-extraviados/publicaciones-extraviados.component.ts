import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-extraviados',
  templateUrl: './publicaciones-extraviados.component.html',
  styleUrls: ['./publicaciones-extraviados.component.css']
})
export class PublicacionesExtraviadosComponent implements OnInit {
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
