import { Router } from '@angular/router';
import { CorriereService } from './../../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accetta-ordini',
  templateUrl: './accetta-ordini.page.html',
  styleUrls: ['./accetta-ordini.page.scss'],
})
export class AccettaOrdiniPage implements OnInit {

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


  public indietro(){
    this.router.navigate(["../../corriere"]);

  }
}
