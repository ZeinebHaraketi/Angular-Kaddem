import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Departement } from 'src/app/Core/models/Departement.model';
import { DepartementService } from 'src/app/Core/services/departement/departement.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent implements OnInit {
  listD :any;
   departement !: Departement;
   closeResult !: string;
   currentDepart =null;
   form : boolean = false;


   depToUpdate= {
    idDepart: "",
    nomDepart: ""
   
  }


  constructor(private departementService: DepartementService, private r: Router, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllDepartemants();

    this.departement = {
       idDepart: null, 
       nomDepart :null
  
    }
  
    this.getDepart(this.route.snapshot.paramMap.get('idDepart'));
  }

  getDepart(id) {
    this.departementService.getD(id)
      .subscribe(
        data => {
          this.currentDepart = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getAllDepartemants(){
    this.departementService.getAllDeparts().subscribe(res=>this.listD=res);

 }

 editDepart(){
  this.r.navigate(['editdepartement'])
   }

   editDep(dep:any){
    this.depToUpdate= dep;
  }


deleteDepart(id:number){
  this.departementService.deleteDepart(id).subscribe(data=>{
      alert("departement Supprime avec success! ");
      this.getAllDepartemants();
    })
}

editDepartement(dep : Departement){
  this.departementService.updateDep(dep).subscribe();
}

/*  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  } */

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }


}
