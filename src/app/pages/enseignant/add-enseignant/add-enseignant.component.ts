import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/Enseignant.model';
import { EnseignantService } from 'src/app/Core/services/enseignant/enseignant.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit {
  enseignant !: Enseignant;
  en: Enseignant[];
  closeResult !: string;
  form : boolean = false;


  ens = {
    idEns: '',
    nomEn: '',
    prenomEn: '',
    salaire: ''
  };
  submitted = false;

  constructor(private fb: FormBuilder,private enseignantService: EnseignantService,private r: Router) { }

  ngOnInit(): void {
  }

  rf= this.fb.group(
    {
      idEns: ['',[Validators.required]],
      nomEn: ['',[Validators.required]],
      prenomEn: ['',[Validators.required]],
      salaire: ['',[Validators.required]]
    }
  );

  addEnseignant(){
    
    this.enseignantService.addEnseignant(this.rf.value).subscribe(data =>{
      console.log("add");
      this.r.navigate(['enseignant'])
  })}


  saveE() {
    const data = {
      idEns: this.ens.idEns,
      nomEn: this.ens.nomEn,
      prenomEn: this.ens.prenomEn,
      salaire: this.ens.salaire

    };

    this.enseignantService.addEnseignant(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEns() {
    this.submitted = false;
    this.ens = {
      idEns: '',
      nomEn: '',
      prenomEn: '',
      salaire: ''
    };
  }

}
