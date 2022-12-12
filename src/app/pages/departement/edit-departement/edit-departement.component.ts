import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/Departement.model';
import { DepartementService } from 'src/app/Core/services/departement/departement.service';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.scss']
})
export class EditDepartementComponent implements OnInit {
  departement !: Departement;
    form : boolean = false;
    message = '';
    currentDepart= null;
    formD !:FormGroup;
    upd:any;
    button:string='Change';
  

  constructor(private departementService: DepartementService,private route: ActivatedRoute,private router: Router,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formD= this.fb.group({
      idDepart: ['',Validators.required ],
      nomDepart: ['',Validators.required ]
    })

    console.log(this.upd);

   if(this.upd){
     this.formD.controls['idDepart'].setValue(this.upd.idDepart);
     this.formD.controls['nomDepart'].setValue(this.upd.nomDepart);
     this.button= "Modifier"
    }
  }

  getDepart(idDepart) {
    this.departementService.getD(idDepart)
      .subscribe(
        data => {
          this.currentDepart = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  editDepart(departement: Departement){
   
  }

}
