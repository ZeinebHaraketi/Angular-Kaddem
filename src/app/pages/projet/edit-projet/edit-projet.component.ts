import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/Core/models/Projet.model';
import { ProjetService } from 'src/app/Core/services/projet/projet.service';
//import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit {

  projet !: Projet;
  form : boolean = false;
  message = '';
  currentProjet= null;
  formP !:FormGroup;
  updP:any;
  button:string='Change';

  /*  contratToUpdate = {
    dateDebutContrat:"",
    dateFinContrat:"",
    specialite:"",
    archive:"",
    montantContrat:""
  } */

  projetToUpdate= {
    idProjet: "",
    description: ""
  }


  constructor(private projetService: ProjetService,private route: ActivatedRoute,private router: Router,private fb : FormBuilder) { }

  ngOnInit(): void {
    //this.message='';
    //    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    //this.getProjet(this.route.snapshot.paramMap.get('idProjet'));

    /*this.formP= this.fb.group({
      idProjet: ['',Validators.required ],
      description: ['',Validators.required ]
    })

    console.log(this.updP);

   if(this.updP){
     this.formP.controls['idProjet'].setValue(this.updP.idProjet);
     this.formP.controls['description'].setValue(this.updP.description);
     this.button= "Modifier"
    }
    */
  }

  getProjet(idProjet) {
    this.projetService.getP(idProjet)
      .subscribe(
        data => {
          this.currentProjet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /*updateProjet() {
    this.projetService.editProjet(this.currentProjet.idProjet, this.currentProjet)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The projet was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }*/

  editProjet(projet : Projet){
    //this.projetService.editProjet(projet).subscribe();
  }

  /* updateExperience(){

    this.experienceService.updateExperience(this.experienceForm.value,this.editdata.idExperience)
    .subscribe({
      next:(r)=>{
        alert("experience bien modifiée")
        this.experienceForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }
 */

  updateProjet(){
    /*
    this.projetService.updateProjet(this.formP.value,this.updP.idProjet).subscribe({
      next:(res)=>{
        alert("projet modifie avec success")
        this.formP.reset()
      },
      error:()=>{
        alert("error de modification")
      }
    })
  */
 /*updateContrat(){
    this.contratService.updateContrat(this.contratToUpdate).subscribe(
      (resp) => {

        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  } */
  this.projetService.updateP(this.projetToUpdate).subscribe(
    (res)=>{
      console.log(res);
      
    },
    (err)=>{
      console.log(err);
      
    });
  }

  editProj(pro : Projet){
    this.projetService.updateP(pro).subscribe();
  }


  updateData(value: any) {
    let body = {
      idProjet: value.idProjet,
      description: value.description
    }
  
    this.projetService.updateProjet(body,4)
      .subscribe(response => {
        console.log(response)
      })
  }
}
