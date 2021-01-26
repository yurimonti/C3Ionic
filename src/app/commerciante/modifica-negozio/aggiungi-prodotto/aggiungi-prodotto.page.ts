import { Router } from '@angular/router';
import { CommercianteService } from 'src/app/commerciante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggiungi-prodotto',
  templateUrl: './aggiungi-prodotto.page.html',
  styleUrls: ['./aggiungi-prodotto.page.scss'],
})
export class AggiungiProdottoPage implements OnInit {

  constructor(private commercianteService:CommercianteService, private router:Router) { }

  ngOnInit() {
  }
  private _nome:string;
  private _descrizione:string;
  private _prezzo:number;
  private _quantita:number;

  
  public set nome(v : string) {
    this._nome = v;
  }
  
  public set descrizione(v : string) {
    this._descrizione = v;
  }
  
  public set prezzo(v : number) {
    this._prezzo = v;
  }
  
  public set quantita(v : number) {
    this._quantita = v;
  }
  
  public get nome() : string {
    return this._nome;
  }
  
  public get descrizione() : string {
    return this._descrizione;
  }
  
  public get prezzo() : number {
    return this._prezzo;
  }
  
  public get quantita() : number {
    return this._quantita;
  }
  
  
  public aggiungi(){
    this.commercianteService.aggiungiProdotto(this._nome,this._descrizione,this._prezzo,this._quantita).subscribe();
    alert(this._nome);
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
