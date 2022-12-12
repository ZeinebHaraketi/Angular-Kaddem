import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Universite } from 'src/app/Core/models/Universite.model';
import { UniversiteService } from 'src/app/Core/services/universite/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent implements OnInit {
  listU: any;
  universite !: Universite;
  closeResult !: string;
  currentUniversite = null;
  form : boolean = false;

  constructor(private universiteService: UniversiteService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUnivs();

    this.universite ={
        idUniv:null,
        nomUniv: null
      }

     
     //this.getUniversite(this.route.snapshot.paramMap.get('idUniv'));
  }

  getAllUnivs(){
    this.universiteService.getAllUnivs().subscribe(res=>this.listU=res);
       }

    // getUniver
    getUniversite(id){
      this.universiteService.getU(id).subscribe(
        data => {
          this.currentUniversite= data;
          console.log(data);
        },
        error => {
          console.log(error);
        } 
      );
  
     }

  
     editUniversite(){
      this.r.navigate(['edituniversite'])
    }

    deleteU(id:number): void{
      this.universiteService.deleteUniv(id).subscribe
      (data=>{
        alert("Universite Supprime avec success! ");
        this.getAllUnivs();
      })
    }


    //----------------------------------- Generate EXCEL Universite --------------------------------//


    exportExcel(){

      this.universiteService.exportEXCEL().subscribe(x=>{
        const blob = new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const n = (window.navigator as any);
    
        if (n.msSaveOrOpenBlob) {
        n.msSaveOrOpenBlob(blob);
        return;
        }
    
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download="universite.xlsx";
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
    
        setTimeout(function(){
          window.URL.revokeObjectURL(data);
            link.remove();
        }, 100);
      });
    }


    //------------------------------ UPDATE ----------------------------------------//


    editUnivers(uni : Universite){
      this.universiteService.editUniv(uni).subscribe();
    }

    /*open(content: any) {
      this.universiteService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      }
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }*/
      closeForm(){
    
      }
      cancel(){
        this.form = false;
      }




}
