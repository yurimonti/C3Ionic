import { Router } from '@angular/router';
import { CommercianteService } from 'src/app/commerciante.service';
import { Commerciante } from './../../commerciante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestisci-ordini',
  templateUrl: './gestisci-ordini.page.html',
  styleUrls: ['./gestisci-ordini.page.scss'],
})
export class GestisciOrdiniPage implements OnInit {

  constructor(private commercianteService:CommercianteService,private router:Router) { }

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
    this.commercianteService.logoutCommerciante();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
  }

  public indietro(){
    this.router.navigate(["../../../commerciante"])
  }

  public ritiraNegozio(){
    this.commercianteService.setOrdineRitiroInNegozio(this._id).subscribe();
    this.router.navigate(["../../../commerciante"]);
  }

  public inviaChiamata(){
    this.commercianteService.inviaChiamata(this._id).subscribe();
    this.router.navigate(["../../../commerciante"]);
  }
}
