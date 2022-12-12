import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../../models/Equipe.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  readonly API_URL= "http://localhost:8091/equipe/equipe";
  urlApi= "http://localhost:8091/equipe";

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };


  constructor(private http:HttpClient) { }

  getAllEquipes(){
    return this.http.get(this.API_URL);

  }

  getE(idEquipe){
    return this.http.get(`${this.API_URL}/${idEquipe}`);
  }

  addEquipe(data){
    return this.http.post(this.API_URL,data);
  }

  deleteEquipe(id: number): Observable<Equipe[]>{
    return this.http.delete<[Equipe]>(this.urlApi+"/remove/"+id);
  }

  updateEquipe(data:any,idEquipe:number){
    return this.http.put<any>("http://localhost:8091/equipe/update/"+idEquipe,data);
  }
}
