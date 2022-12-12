import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../../models/Enseignant.model';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  readonly API_URL= "http://localhost:8091/ens/ens";
  urlApi= "http://localhost:8091/ens";

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }

  getAllEnseignants(){
    return this.http.get(this.API_URL);
  }

  getEn(idEns) {
    return this.http.get(`${this.API_URL}/${idEns}`);
  }

  addEnseignant(data){
    return this.http.post(this.API_URL,data);
  }

  deleteEnseignant(id: number): Observable<Enseignant[]>{
    return this.http.delete<[Enseignant]>(this.urlApi+"/remove/"+id);
  }

  public updateE(ens:any){
    return this.http.put('http://localhost:8091/ens/update/',ens);
  }
}
