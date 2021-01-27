import { Router } from '@angular/router';
import { CommercianteService } from './../../commerciante.service';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/prodotto';

@Component({
  selector: 'app-modifica-negozio',
  templateUrl: './modifica-negozio.page.html',
  styleUrls: ['./modifica-negozio.page.scss'],
})
export class ModificaNegozioPage implements OnInit {
  private _prodotti:Array<Prodotto>;
  constructor(private commercianteService:CommercianteService,private router:Router) { }

  ngOnInit() {
    this.getProdotti();
  }

  public get prodotti() : Array<Prodotto> {
    return this._prodotti;
  }

  public set prodotti(v : Array<Prodotto>) {
    this._prodotti = v;
  }


    
  public getProdotti(){
    this.commercianteService.getProdottiNegozio().subscribe((data:Array<Prodotto>)=>{
      this._prodotti=data;
    })
  }
  public logout(){
    this.commercianteService.logoutCommerciante();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }
  public indietro(){
    this.router.navigate(["../../../commerciante"])
  }

  public aggiorna(){
    this.getProdotti();
  }
  
}
