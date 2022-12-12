import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/Enseignant.model';
import { EnseignantService } from 'src/app/Core/services/enseignant/enseignant.service';

@Component({
  selector: 'app-list-enseignant',
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.scss']
})
export class ListEnseignantComponent implements OnInit {
  listE: any;
  enseignant !: Enseignant;
  closeResult !: string;
  currentEns = null;

  
  ensToUpdate= {
    idEns: "",
    nomEn: "",
    prenomEn: "",
    salaire: ""
  }

  constructor(private enseignantService: EnseignantService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEns();

  }

  getAllEns(){
    this.enseignantService.getAllEnseignants().subscribe(res=>this.listE=res);
  }

  getEns(id) {
    this.enseignantService.getEn(id)
      .subscribe(
        data => {
          this.currentEns = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteEns(id:number){
    this.enseignantService.deleteEnseignant(id).subscribe(data=>{
      alert("Enseignant Supprime avec success! ");
      this.getAllEns();
    })
  }

  editEns(ens:any){
    this.ensToUpdate= ens;
  }

}
