import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailEquipe } from 'src/app/Core/models/DetailEquipe.model';
import { DetailequipeService } from 'src/app/Core/services/detailequipe/detailequipe.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {
  detail !: DetailEquipe;
  de : DetailEquipe[];
  closeResult !: string;
  form : boolean=false;

  det = {
    salle :'',
    thematique : '',
   };
    
   submitted = false;

  constructor(private fb: FormBuilder, private detailService: DetailequipeService,private r:Router) { }

  ngOnInit(): void {
  }

  rf= this.fb.group(
    {
      salle :['',[Validators.required]],
      thematique : ['', [Validators.required]]

    }
  );

  addDeta(){
    this.detailService.addDetails(this.rf.value).subscribe(data =>{

      console.log("add");
      this.r.navigate(['equipe'])
    })
  }

  saveDE(){

    const data = {
     salle : this.det.salle,
     thematique : this.det.thematique

    };

    this.detailService.addDetails(data).subscribe(
     response => {
       console.log(response);
       this.submitted = true;
     },
     error =>{
       console.log(error);
     }
    );
    }

    newDetails() {
      this.submitted = false;
      this.det = {
        salle :'',
        thematique : '',
       };

      }
     


}
