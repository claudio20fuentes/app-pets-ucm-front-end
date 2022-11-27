import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { catchError, retry } from 'rxjs';

const base_url = environment.base_url;
//
//
//* METODO PARA TRAER DATA DE LAS PUBLICACIONES DESDE API
//
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) { }

  getPublicaciones(){
    const endpoint = `${base_url}/publicaciones`;
    return this.http.get(endpoint); //dependiendo del metodo http
  }

  getPublicacionesPorId(){
    const endpoint = `${base_url}/publicaciones/?categoriaPublicacionId=1`;
    return this.http.get(endpoint);
  }

}


/** 
 *   
 * getPublicaciones(){
    const endpoint = `${base_url}/users`;
    return this.http.get(endpoint); //dependiendo del metodo http
  }
 * 
*/
