import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Departement } from '../../models/Departement.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  readonly API_URL= "http://localhost:8091/depart/depart";
  urlApi= "http://localhost:8091/depart";

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }

  getAllDeparts(){
    return this.http.get(this.API_URL);
  }
  
  getD(idDepart){
    return this.http.get(`${this.API_URL}/${idDepart}`);
   }
  
  addDepart(data){
  return this.http.post(this.API_URL, data);
   }

   deleteDepart(id: number): Observable<Departement[]> 
 {
   return this.http.delete<[Departement]>(this.urlApi+"/remove/"+id);
  }

updateDepart(data:any,idDepart:number){
    return this.http.put<any>("http://localhost:8091/depart/update/"+idDepart,data);
  }

  updateDep(dep:any){
    return this.http.put<any>("http://localhost:8091/depart/update/",dep);
  }

}
