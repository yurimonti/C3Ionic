import { Ordine } from './../../ordine';
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
  private _ordini: Array<Ordine>;
  private _filtro:string;

  constructor(private commercianteService:CommercianteService,private router:Router) { }

  ngOnInit() {
    this.getOrdini();
  }
  public get filtro(): string {
    return this._filtro;
  }
  public set filtro(value: string) {
    this._filtro = value;
  }

  public selectFilter(filtro:any){
    filtro = this._filtro;
    if(filtro=="tutti")this.getOrdini();
    if(filtro=="non completati")this.getOrdiniNonCompletati();
    if(filtro=="da soddisfare")this.getOrdiniDaSoddisfare();
    if(filtro=="per ritiro")this.getOrdiniPerRitiro();
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
    })
  }
  public getOrdiniNonCompletati(){
    return this.commercianteService.getOrdiniNonCompletati().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
  }
  public getOrdiniPerRitiro(){
    return this.commercianteService.getOrdiniPerRitiro().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
  }

  public getOrdini(){
    this.commercianteService.getOrdini().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
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
