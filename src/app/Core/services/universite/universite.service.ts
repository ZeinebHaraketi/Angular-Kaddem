import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Universite } from '../../models/Universite.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  readonly API_URL= "http://localhost:8091/universite/univ";
  urlApi= "http://localhost:8091/universite";


  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }

  getAllUnivs(){
    return this.http.get(this.API_URL);

  }

  getU(idUniv){
    return this.http.get(`${this.API_URL}/${idUniv}`);
  }

  addUniv(data){
    return this.http.post(this.API_URL,data);
  }

  deleteUniv(id: number): Observable<Universite[]>{
    return this.http.delete<[Universite]>(this.urlApi+"/remove/"+id);
  }

  //upd1 ==> non réussi
  updateUniv(data:any,idUniv:number){
    return this.http.put<any>("http://localhost:8091/universite/update/"+idUniv,data);
  }

  //upd2
  editUniv(uni:any){
    return this.http.put<any>("http://localhost:8091/universite/update/",uni);
  }
  
  exportEXCEL():Observable<Blob>{
    return this.http.get("http://localhost:8091/universite/excel/",{responseType: 'blob' });
   }
}
