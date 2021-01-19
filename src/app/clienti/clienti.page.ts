import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Locker } from '../locker';
import { Negozio } from '../negozio';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss'],
})
export class ClientiPage implements OnInit {
  private _idNegozio:number;
  private _idLocker:number;
  private _idProdotto:number;
  private _negozi:Array<Negozio>;
  private _prodotti:Array<Prodotto>;
  private _lockers:Array<Locker>;
  private _numeroProdotto:number;

  constructor(private clienteService:ClienteService,private router:Router) {}

  ngOnInit() {
    this.getNegozi();
    this.getLockers();
  }
  
  public get numeroProdotto() : number {
    return this._numeroProdotto;
  }
  
  public set numeroProdotto(v : number) {
    this._numeroProdotto = v;
  }
  

  public get idLocker() : number {
    return this._idLocker;
  }
  
  public set idLocker(v : number) {
    this._idLocker = v;
  }
  
  public get idProdotto() : number {
    return this._idProdotto;
  }
  
  public set idProdotto(v : number) {
    this._idProdotto = v;
  }
  
  public get lockers() : Array<Locker> {
    return this._lockers;
  }
  
  public set lockers(v : Array<Locker>) {
    this._lockers = v;
  }
  
  
  public get prodotti() : Array<Prodotto> {
    return this._prodotti;
  }
  
  public set prodotti(v : Array<Prodotto>) {
    this._prodotti = v;
  }
  
  public getProdotti(){
      this.clienteService.getProdotti(this.idNegozio).subscribe((data:Array<Prodotto>)=>{
        this.prodotti = data;
      });
  }

  public getLockers(){
    this.clienteService.getLockers().subscribe((data:Array<Locker>)=>{
      this.lockers = data;
    })
  }

  public getNegozi(){
    this.clienteService.getNegozi().subscribe((data:Array<Negozio>)=>{
      this.negozi = data;
    })
  }
  
  public get negozi() : Array<Negozio>{
    return this._negozi;
  }
  
  public set negozi(v : Array<Negozio>) {
    this._negozi = v;
  }
  
  

  public get idNegozio() : number {
    return this._idNegozio;
  }

  
  public set idNegozio(v : number) {
    this._idNegozio = v;
  }
  
  public setDestinazioneToOrdine(){
    return this.clienteService.setDestinazione(this._idLocker).subscribe((data:string)=>{
      alert(data);
    });
  }

  public setEmittenteToOrdine(){
    return this.clienteService.setEmittente(this._idNegozio).subscribe((data:string)=>{
      alert(data);
    });
  }

  public annullaOrdine(){
    return this.clienteService.annullaOrdine().subscribe((data:string)=>{
      alert(data);
      this.router.navigate(['../login']);
    });
    
  }

  public setProdottoToOrdine(){
    return this.clienteService.setProdotto(this._idProdotto,this._numeroProdotto).subscribe((data:string)=>{
      alert(data);
    })
  }

  public addOrdineToCliente(){
    return this.clienteService.addOrdine(this.clienteService.sharedIdCliente).subscribe((data:string)=>{
      alert(data);
    })
  }

  public alertIdCliente(){
    alert(this.clienteService.sharedIdCliente);
  }

}
