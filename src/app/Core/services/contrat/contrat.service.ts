import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../../models/Contrat.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private contratUrl: string;
  
   readonly API_URL= "http://localhost:8091/contrat/contrat";
  urlApi= "http://localhost:8091/contrat";
  
  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
  
  constructor( private httpClient:HttpClient,private router:Router){ 
  }
  
   findAll(): Observable<Contrat[]> {
    return this.httpClient.get<Contrat[]>('/api/kaddem/contrat/allcontrat');
  }
  
   getAllContrats(){
    return this.httpClient.get(this.API_URL);
  }


  /*addContrat(contrat:Contrat){
    return this.httpClient.post('/api/kaddem/contrat/addC',contrat);
  }*/
  
   addContrat(data){
    return this.httpClient.post(this.API_URL,data);
  }

  deleteContrat(id:Number){
    return this.httpClient.delete(this.urlApi+"/remove/"+id);
  }
  
  deleteContrat1(id: number): Observable<Contrat[]>{
    return this.httpClient.delete<[Contrat]>(this.urlApi+"/remove/"+id);
  }
  
  getContrat(id: Number){
    return this.httpClient.get<Contrat>('/api/kaddem/contrat/allcontrat/'+id);
  }
  
  getC(idContrat) {
    return this.httpClient.get(`${this.API_URL}/${idContrat}`);
  }

  updateContrat(contrat:Contrat){
    return this.httpClient.put('/api/kaddem/contrat/modifC',contrat);
  }
  
  public updateC(contrat:any){
    return this.httpClient.put('http://localhost:8091/contrat/update/',contrat);
  }
  sendEmail(id: Number){
    return this.httpClient.get('http://localhost:8091/contrat/send/'+id);
  }

}
