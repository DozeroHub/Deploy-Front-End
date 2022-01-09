import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://dozerohub.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://dozerohub.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(Tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://dozerohub.herokuapp.com/tema', Tema, this.token)
  }

  putTema(Tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://dozerohub.herokuapp.com/tema', Tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://dozerohub.herokuapp.com/tema/${id}`, this.token)
  }

}
