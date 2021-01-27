import { Router } from '@angular/router';
import { CorriereService } from './../../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordini-accettati',
  templateUrl: './ordini-accettati.page.html',
  styleUrls: ['./ordini-accettati.page.scss'],
})
export class OrdiniAccettatiPage implements OnInit {

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

  public ritiraOrdine(){
    this.corriereService.ritiraOrdine(this._id).subscribe();
  }
  public consegnaOrdine(){
    this.corriereService.consegnaOrdine(this._id).subscribe();
  }
  
  public logout(){
    this.corriereService.logoutCorriere();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }

  public aggiorna(){
    
  }
  public indietro(){
    this.router.navigate(["../../corriere"]);

  }
}
