import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../../models/Etudiant.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private etudiantUrl: string;
  readonly API_URL= "http://localhost:8091/etudiant/etudiant";
  urlApi= "http://localhost:8091/etudiant";
  
  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  
  constructor( private httpClient:HttpClient,private router:Router){ 
  }
  
   findAll(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>('/api/kaddem/etudiant/allEt');
  }

  getAllEtudiants(){
    return this.httpClient.get(this.API_URL);
  }


  /*addEtudiant(etudiant:Etudiant){
    return this.httpClient.post('/api/kaddem/etudiant/addEt',etudiant);
  }*/

  addEtudiant(data){
    return this.httpClient.post(this.API_URL,data);
  }


  /*deleteEtudiant(id:Number){
    return this.httpClient.delete('/api/kaddem/etudiant/suppEt/'+id);
  }*/
  deleteEtudiant(id: number): Observable<Etudiant[]>{
    return this.httpClient.delete<[Etudiant]>(this.urlApi+"/remove/"+id);
  }
  

  
  getEtudiant(id: Number){
    return this.httpClient.get<Etudiant>('/api/kaddem/etudiant/allEt/'+id);
  }

  getE(idEtudiant) {
    return this.httpClient.get(`${this.API_URL}/${idEtudiant}`);
  }

  updateEtudiant(etudiant:Etudiant){
    return this.httpClient.put('/api/kaddem/etudiant/modifEt',etudiant);
  }

  public updateE(etudiant:any){
    return this.httpClient.put('http://localhost:8091/etudiant/update/',etudiant);
  }

  sendEmail(id: Number){
   // return this.httpClient.get('/api/kaddem/etudiant/send/'+id);
   return this.httpClient.get('http://localhost:8091/etudiant/send/'+id);

  }
}