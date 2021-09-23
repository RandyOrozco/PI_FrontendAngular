import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Catedratico } from '../models/catedratico';
import { Curso } from '../models/curso';
import { Publicacion } from '../models/publicacion';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CapamediaService {

  private API_URI = 'http://127.0.0.1:8080/api';
  constructor(private _http: HttpClient) { }

  /*USUARIO*/
  getUsuarioTodo(){
    return this._http.get(`${this.API_URI}/usuario/todo`);
  }

  getUsuarioUno(id: string){
    return this._http.get(`${this.API_URI}/usuario/uno?usuario=${id}`);
  }

  saveUsuario(usuario: Usuario){
    return this._http.post(`${this.API_URI}/usuario/`, usuario);
  }

  updateUsuario(id: string, usuario: Usuario): Observable<any>{
    return this._http.put(`${this.API_URI}/usuario/${id}`, usuario);
  }

  deleteUsuario(id: string){
    return this._http.delete(`${this.API_URI}/usuario/${id}`);
  }

  /*PUBLICACION*/
  getPublicacionTodo(){
    return this._http.get(`${this.API_URI}/publicacion/todo`);
  }

  getPublicacionUno(id: string){
    return this._http.get(`${this.API_URI}/publicacion/uno?publicacion=${id}`);
  }

  savePublicacion(publicacion: Publicacion){
    return this._http.post(`${this.API_URI}/publicacion/`, publicacion);
  }

  updatePublicacion(id: string, publicacion: Publicacion): Observable<any>{
    return this._http.put(`${this.API_URI}/publicacion/${id}`, publicacion);
  }

  deletePublicacion(id: string){
    return this._http.delete(`${this.API_URI}/publicacion/${id}`);
  }

  /*CATEDRATICO*/
  getCatedraticoTodo(){
    return this._http.get(`${this.API_URI}/catedratico/todo`);
  }

  getCatedraticoUno(id: string){
    return this._http.get(`${this.API_URI}/catedratico/uno?catedratico=${id}`);
  }

  saveCatedratico(catedratico: Catedratico){
    return this._http.post(`${this.API_URI}/catedratico/`, catedratico);
  }

  updateCatedratico(id: string, catedratico: Catedratico): Observable<any>{
    return this._http.put(`${this.API_URI}/catedratico/${id}`, catedratico);
  }

  deleteCatedratico(id: string){
    return this._http.delete(`${this.API_URI}/catedratico/${id}`);
  }

  /*CURSO*/
  getCursoTodo(){
    return this._http.get(`${this.API_URI}/curso/todo`);
  }

  getCursoUno(id: string){
    return this._http.get(`${this.API_URI}/curso/uno?curso=${id}`);
  }

  saveCurso(curso: Curso){
    return this._http.post(`${this.API_URI}/curso/`, curso);
  }

  updateCurso(id: string, curso: Curso): Observable<any>{
    return this._http.put(`${this.API_URI}/curso/${id}`, curso);
  }

  deleteCurso(id: string){
    return this._http.delete(`${this.API_URI}/curso/${id}`);
  }


}
