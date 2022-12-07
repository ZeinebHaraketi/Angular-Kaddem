import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/Core/models/Projet.model';
import { ProjetService } from 'src/app/Core/services/projet/projet.service';

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.scss']
})
export class ListprojetComponent implements OnInit {

  listP: any;
  projet !: Projet;
  closeResult !: string;
  currentProjet = null;

  constructor(private projetService: ProjetService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProjets();

    this.projet = {
      idProjet: null,
      description:null
    }

    this.getProjet(this.route.snapshot.paramMap.get('idProjet'));

  }

  getProjet(id) {
    this.projetService.getP(id)
      .subscribe(
        data => {
          this.currentProjet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getAllProjets(){
    this.projetService.getAllProjects().subscribe(res=>this.listP=res);
  }

  /*deleteProjet(idProjet: any){
    this.projetService.deleteProjet(idProjet).subscribe(()=> this.getAllProjets());
  }*/

  editProjet(){
    this.r.navigate(['editprojet'])
  }

  /*deleteProjet() {
    this.projetService.deleteProjet(this.currentProjet.idProjet)
      .subscribe(
        response => {
          console.log(response);
          this.r.navigate(['/projet']);
        },
        error => {
          console.log(error);
        });
  }*/


deleteProjet(id:number){
  this.projetService.deleteProjet(id).subscribe(data=>{
    alert("Projet Supprime avec success! ");
    this.getAllProjets();
  })
}

/*editExperience(row :any) {
this.dialog.open(DialogExperienceComponent, {
width:'30%',
data:row

}).afterClosed().subscribe(val=>{
if(val==='update'){
this.getAllExperiences()
}
});;
} */



}
