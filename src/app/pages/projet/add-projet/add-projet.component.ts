import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet } from 'src/app/Core/models/Projet.model';
import { ProjetService } from 'src/app/Core/services/projet/projet.service';


@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
  projet !: Projet;
  pr: Projet[];
  closeResult !: string;
  form : boolean = false;


  proj = {
    idProjet: '',
    description: '',
  };
  submitted = false;

  //  constructor(private projetService: ProjetService) { }

  constructor(private fb: FormBuilder,private projetService: ProjetService,private r: Router) { }

  ngOnInit(): void {
    /*
    this.projet = {
      idProjet: null,
      description:null
    }*/
  }

  rf= this.fb.group(
    {
      // titreDuProfil:['',[Validators.required]],
      idProjet: ['',[Validators.required]],
      description: ['',[Validators.required]]
    }
  );
  addProjet(){
   

    this.projetService.addProjet(this.rf.value).subscribe(data =>{
      console.log("add");
      this.r.navigate(['projet'])
  })}

  /**
   *  addProjet(p:any){
    /*
    this.projetService.addProjet(p).subscribe(()=> {
      this.form= false;
    });

    this.projetService.addProjet(this.rf.value).subscribe(data =>{
      console.log("add");
      this.r.navigate(['projet'])
  })}
   */


  saveP() {
    const data = {
      idProjet: this.proj.idProjet,
      description: this.proj.description
    };

    this.projetService.addProjet(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProjet() {
    this.submitted = false;
    this.proj = {
      idProjet: '',
      description: '',
    };
  }
}
