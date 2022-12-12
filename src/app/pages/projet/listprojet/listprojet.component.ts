import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  //totalElements: number = 0;

  @ViewChild('myform')form!:NgForm;

  projetToUpdate= {
    idProjet: "",
    description: ""
  }

  constructor(private projetService: ProjetService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProjets();
   //this.getProj({ page: "0", size: "5" });
    /*this.projet = {
      idProjet: null,
      description:null
    }

    this.getProjet(this.route.snapshot.paramMap.get('idProjet'));*/

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


  /*editProjet(){
    this.r.navigate(['editprojet'])
  }*/
  editProjet(projet:any){
    this.projetToUpdate= projet;
  }


deleteProjet(id:number){
  this.projetService.deleteProjet(id).subscribe(data=>{
    alert("Projet Supprime avec success! ");
    this.getAllProjets();
  })
}

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

this.projetService.updateP(this.projetToUpdate).subscribe(
  (res)=>{
    console.log(res);
    
  },
  (err)=>{
    console.log(err);
    
  });
}

/*private getProj(request) {
  this.projetService.getPaging(request)
  .subscribe(data => {
    this.projet = data['content'];
  }
  , error => {
    console.log(error.error.message);
  }
  );
}

nextPage(event: PageEvent) {
  const request = {};
  request['page'] = event.pageIndex.toString();
  request['size'] = event.pageSize.toString();
  this.getProj(request);
}*/


//------------------------- Generate PDF Projet --------------------------------------//

  exportPDF(){
    this.projetService.exportPDF().subscribe(x=>{
      const blob = new Blob([x], { type: 'application/pdf' });
      const url= window.URL.createObjectURL(blob);
      const nav = (window.navigator as any);

      if (nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(blob);
        return;
      }

      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href= data;
      link.download="projet.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);

      
    });
  }

//----------------------------------- Generate EXCEL Projet --------------------------------//
exportExcel(){

  this.projetService.exportEXCEL().subscribe(x=>{
    const blob = new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const n = (window.navigator as any);

    if (n.msSaveOrOpenBlob) {
    n.msSaveOrOpenBlob(blob);
    return;
    }

    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download="projet.xlsx";
    link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

    setTimeout(function(){
      window.URL.revokeObjectURL(data);
        link.remove();
    }, 100);
  });
}

//UPD
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
