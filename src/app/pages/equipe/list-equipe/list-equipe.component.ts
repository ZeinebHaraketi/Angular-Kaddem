import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/Core/models/Equipe.model';
import { EquipeService } from 'src/app/Core/services/equipe/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.scss']
})
export class ListEquipeComponent implements OnInit {
  listE: any;
  equipe !: Equipe;
  closeResult !: string;
  currentEquipe = null;


  constructor(private equipeService: EquipeService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEquipes();

    this.equipe ={
        idEquipe:null,
        nomEquipe: null,
        niveau:null
      }

     
     //this.getEquipe(this.route.snapshot.paramMap.get('idEquipe'));
  }

  getAllEquipes(){
    this.equipeService.getAllEquipes().subscribe(res=>this.listE=res);
  }

   // getEq
   getEquipe(id){
    this.equipeService.getE(id).subscribe(
      data => {
        this.currentEquipe= data;
        console.log(data);
      },
      error => {
        console.log(error);
      } 
    );

   }

   editEquipes(){
    this.r.navigate(['editequipe'])
  }

  deleteE(idEquipe:number): void{
    this.equipeService.deleteEquipe(idEquipe).subscribe(data=>{
      alert("Equipe Supprime avec success! ");
      this.getAllEquipes();
    })}


}
