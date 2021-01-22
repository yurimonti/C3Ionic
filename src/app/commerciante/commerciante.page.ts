import { Router } from '@angular/router';
import { Ordine } from './../ordine';
import { CommercianteService } from './../commerciante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commerciante',
  templateUrl: './commerciante.page.html',
  styleUrls: ['./commerciante.page.scss'],
})
export class CommerciantePage implements OnInit {
  private _ordini: Array<Ordine>;
  ordiniStampati:Array<Ordine>= new Array();

  constructor(private commercianteService:CommercianteService,private router:Router) { }
  ngOnInit() {
    this.getOrdiniDaSoddisfare();
  }

  public get ordini(): Array<Ordine> {
    return this._ordini;
  }
  public set ordini(value: Array<Ordine>) {
    this._ordini = value;
  }


  public settaDest(ord:Array<Ordine>):void{
    let ordiniA:Ordine[]= [];
    let fun = function settaDestinazioneStringa(ord:Ordine) {
      if(ord.destinazione==null)ord.destinazioneStringa=ord.emittente.nome;
      else ord.destinazioneStringa=ord.destinazione.nome;
    }
    ord.forEach(function(o){
      fun(o);
      ordiniA.push(o);
    });
    this._ordini=ordiniA;
  }

  public getOrdiniDaSoddisfare(){
    return this.commercianteService.getOrdiniDaSoddisfare().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
      //this._ordini=data;
    })
  }

  public logout(){
    this.commercianteService.logoutCommerciante();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
  }

}
