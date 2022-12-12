import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Core/models/Equipe.model';
import { EquipeService } from 'src/app/Core/services/equipe/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.scss']
})
export class AddEquipeComponent implements OnInit {
  equipe !: Equipe;
   eq : Equipe[];
   closeResult !: string;
   form : boolean=false;


   equi = {
    idEquipe :'',
    nomEquipe : '',
    niveau : '',
   };
    
   submitted = false;

  constructor(private fb: FormBuilder, private equipeService: EquipeService,private r:Router) { }

  ngOnInit(): void {
  }

  rf= this.fb.group(
    {
      idEquipe :['',[Validators.required]],
      nomEquipe : ['', [Validators.required]],
      niveau : ['', [Validators.required]]

    }
  );


  addEqui(){
    this.equipeService.addEquipe(this.rf.value).subscribe(data =>{

      console.log("add");
      this.r.navigate(['equipe'])
    })
  }

  saveE(){

    const data = {
     idEquipe : this.equi.idEquipe,
     nomEquipe : this.equi.nomEquipe,
     niveau : this.equi.niveau
    };

    this.equipeService.addEquipe(data).subscribe(
     response => {
       console.log(response);
       this.submitted = true;
     },
     error =>{
       console.log(error);
     }
    );
    }

    newEquipe() {
      this.submitted = false;
      this.equi = {
        idEquipe :'',
        nomEquipe : '',
        niveau : '',
       };

      }
     

}
