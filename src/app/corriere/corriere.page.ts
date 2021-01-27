import { Router } from '@angular/router';
import { CorriereService } from './../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corriere',
  templateUrl: './corriere.page.html',
  styleUrls: ['./corriere.page.scss'],
})
export class CorrierePage implements OnInit {

  constructor(private corriereService:CorriereService,private router:Router) { }

  ngOnInit() {
  }

  private _id:number;

  
  public set id(v : number) {
    this._id = v;
  }

  
  public get id() : number {
    return this._id;
  }

  public logout(){
    this.corriereService.logoutCorriere();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }

  public accettaChiamata(){
    this.corriereService.accettaChiamata(this._id).subscribe();
  }
  public ritiraOrdine(){
    this.corriereService.ritiraOrdine(this._id).subscribe();
  }
  public consegnaOrdine(){
    this.corriereService.consegnaOrdine(this._id).subscribe();
  }
  

  public aggiorna(){
    
  }
}
