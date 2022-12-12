import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/Departement.model';
import { DepartementService } from 'src/app/Core/services/departement/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.scss']
})
export class AddDepartementComponent implements OnInit {
  departement !: Departement;
  dp : Departement[];
  closeResult !: string;
  form : boolean = false;

  dep = {
    idDepart :'',
    nomDepart :'',
  };

  submitted = false;

  constructor(private fb: FormBuilder, private departementService :DepartementService, private r: Router) { }

  ngOnInit(): void {
  }

  rf= this.fb.group(
    {
      
      idDepart: ['',[Validators.required]],
      nomDepart: ['',[Validators.required]]
    }
  );

  addDepart(){
    this.departementService.addDepart(this.rf.value).subscribe(data =>{
      console.log("add");
      this.r.navigate(['departement'])
  })}

  saveD() {
    const data = {
      idDepart: this.dep.idDepart,
      nomDepart: this.dep.nomDepart
    };

    this.departementService.addDepart(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDepart() {
    this.submitted = false;
    this.dep = {
      idDepart: '',
      nomDepart: '',
    };
  }

  


}
