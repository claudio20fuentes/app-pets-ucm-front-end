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

  getPublicacionesAdopciones(){
    const endpoint = `${base_url}/publicaciones/?categoriaPublicacionId=1`;
    return this.http.get(endpoint);
  }

  getPublicacionesEncontrados(){
    const endpoint = `${base_url}/publicaciones/?categoriaPublicacionId=2`;
    return this.http.get(endpoint);
  }

  getPublicacionesExtraviados(){
    const endpoint = `${base_url}/publicaciones/?categoriaPublicacionId=3`;
    return this.http.get(endpoint);
  }



  getPublicacionesPorId(id:number){
    const endpoint = `${base_url}/publicaciones/${id}`;
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
