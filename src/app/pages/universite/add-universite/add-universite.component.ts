import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/Core/models/Universite.model';
import { UniversiteService } from 'src/app/Core/services/universite/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss']
})
export class AddUniversiteComponent implements OnInit {
  universite !: Universite;
   uv : Universite[];
   closeResult !: string;
   form : boolean=false;

   univ = {
    idUniv :'',
    nomUniv : '',
   };
    
   submitted = false;

  constructor(private fb: FormBuilder, private universiteService: UniversiteService,private r:Router) { }

  ngOnInit(): void {
  }

  rf= this.fb.group(
    {
      idUniv :['',[Validators.required]],
      nomUniv : ['', [Validators.required]]

    }
  );


  addUniv(){
    this.universiteService.addUniv(this.rf.value).subscribe(data =>{

      console.log("add");
      this.r.navigate(['universite'])
    })
  }
  
  saveU(){

    const data = {
     idUniv : this.univ.idUniv,
     nomUniv : this.univ.nomUniv
    };

    this.universiteService.addUniv(data).subscribe(
     response => {
       console.log(response);
       this.submitted = true;
     },
     error =>{
       console.log(error);
     }
    );
    }

    newUniversite() {
      this.submitted = false;
      this.univ = { 
        idUniv :'',
        nomUniv : '',
       };

      }
     
}
