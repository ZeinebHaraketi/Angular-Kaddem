import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../../models/Projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  readonly API_URL= "http://localhost:8091/projet/projet";
  urlApi= "http://localhost:8091/projet";
  updApi ="http://localhost:8091/projet/update/"

   optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }

  getAllProjects(){
    //return this.http.get(`${this.API_URL}/allprojet`);
    return this.http.get(this.API_URL);

  }

  getP(idProjet) {
    return this.http.get(`${this.API_URL}/${idProjet}`);
  }

  /**
   * 
   *   create(data) {
    return this.http.post(baseUrl, data);
  }
   */

  addProjet(data){
    return this.http.post(this.API_URL,data);
  }

  /**
   * 
   * update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
   */
  /*editProjet(idProjet,data){
    return this.http.put(`${this.API_URL}/${idProjet}`,data);
  }*/


  deleteProjet(id: number): Observable<Projet[]>{
    return this.http.delete<[Projet]>(this.urlApi+"/remove/"+id);
  }

  /*updateExperience(data:any,id:number){

    return this.http.put<any>("http://localhost:8080/test/Experience/update/"+id,data)
    } */

  updateProjet(data:any,idProjet:number){
    return this.http.put<any>("http://localhost:8091/projet/update/"+idProjet,data);
  }
}
