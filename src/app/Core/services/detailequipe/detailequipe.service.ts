import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailEquipe } from '../../models/DetailEquipe.model';

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {
  readonly API_URL= "http://localhost:8091/detail/detail";
  urlApi= "http://localhost:8091/detail";

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }

  getAllDetails(){
    return this.http.get(this.API_URL);

  }

  getDE(salle){
    return this.http.get(`${this.API_URL}/${salle}`);
  }

  addDetails(data){
    return this.http.post(this.API_URL,data);
  }

  deleteDetails(id: number): Observable<DetailEquipe[]>{
    return this.http.delete<[DetailEquipe]>(this.urlApi+"/remove/"+id);
  }

  updateEquipe(data:any,salle:number){
    return this.http.put<any>("http://localhost:8091/detail/update/"+salle,data);
  }
}
