import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommercianteService } from 'src/app/commerciante.service';

@Component({
  selector: 'app-elimina-prodotto',
  templateUrl: './elimina-prodotto.page.html',
  styleUrls: ['./elimina-prodotto.page.scss'],
})
export class EliminaProdottoPage implements OnInit {

  private _idProdotto:number;
  constructor(private commercianteService:CommercianteService, private router:Router) { }

  ngOnInit() {
  }

  
  public set idProdotto(v : number) {
    this._idProdotto = v;
  }
  
  
  public get idProdotto() : number {
    return this._idProdotto;
  }

  public elimina(){
    this.commercianteService.eliminaProdotto(this._idProdotto).subscribe();
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
