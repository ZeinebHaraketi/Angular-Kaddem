import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/Core/models/DetailEquipe.model';
import { DetailequipeService } from 'src/app/Core/services/detailequipe/detailequipe.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  listD: any;
  detail !: DetailEquipe;
  closeResult !: string;
  currentDetails = null;


  constructor(private detailService: DetailequipeService,private r: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllDetails();

    this.detail ={
        salle:null,
        thematique: null,
      }
       //this.getDetail(this.route.snapshot.paramMap.get('salle'));
  }

  getAllDetails(){
    this.detailService.getAllDetails().subscribe(res=>this.listD=res);
  }

  // getDetail
  getDetail(id){
    this.detailService.getDE(id).subscribe(
      data => {
        this.currentDetails= data;
        console.log(data);
      },
      error => {
        console.log(error);
      } 
    );

   }

   editDetails(){
    this.r.navigate(['editdetail'])
  }

  deleteD(salle:number): void{
    this.detailService.deleteDetails(salle).subscribe(data=>{
      alert("Details Supprime avec success! ");
      this.getAllDetails();
    })}

}
