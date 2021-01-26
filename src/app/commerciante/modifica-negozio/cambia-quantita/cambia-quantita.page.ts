import { Prodotto } from './../../../prodotto';
import { Router } from '@angular/router';
import { CommercianteService } from 'src/app/commerciante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambia-quantita',
  templateUrl: './cambia-quantita.page.html',
  styleUrls: ['./cambia-quantita.page.scss'],
})
export class CambiaQuantitaPage implements OnInit {

  constructor(private commercianteService:CommercianteService,private router:Router) { }

  ngOnInit() {
  }

  private _id:number;
  private _quantita:number;
  private prodotto: Prodotto;

  
  public set id(v : number) {
    this._id = v;
  }
  
  
  public set quantita(v : number) {
    this._quantita = v;
  }
  
  
  public get id() : number {
    return this._id;
  }
  
  
  public get quantita() : number {
    return this._quantita;
  }

  public aggiungi(){
    this.commercianteService.aggiungiQuantita(this._id,this._quantita).subscribe((data:Prodotto)=>this.prodotto=data);
  }
  public togli(){
    this.commercianteService.diminuisciQuantita(this._id,this._quantita).subscribe((data:Prodotto)=>this.prodotto=data);
  }

  public logout(){
    this.commercianteService.logoutCommerciante();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
  }
  public indietro(){
    this.router.navigate(["../../../commerciante/modifica-negozio"])
  }
  
}
