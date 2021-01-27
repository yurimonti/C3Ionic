import { Ordine } from './../../ordine';
import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlla-ordini',
  templateUrl: './controlla-ordini.page.html',
  styleUrls: ['./controlla-ordini.page.scss'],
})
export class ControllaOrdiniPage implements OnInit {
  private _ordini: Array<Ordine>;
  private _filtro: string;
  private _idOrdine: number;
  private _idOrdineInfo: number;
  constructor(private clienteService:ClienteService) {}
  
  ngOnInit() {
    this.getOrdini();
  }

  
  public get idOrdineInfo(): number {
    return this._idOrdineInfo;
  }
  public set idOrdineInfo(value: number) {
    this._idOrdineInfo = value;
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

  public getOrdineInfo(){
    return this.clienteService.getOrdineInfo(this._idOrdineInfo).subscribe((data:Ordine)=>{
      alert(data);
    })
  }

  public get idOrdine(): number {
    return this._idOrdine;
  }
  public set idOrdine(value: number) {
    this._idOrdine = value;
  }
  public get filtro(): string {
    return this._filtro;
  }
  public set filtro(value: string) {
    this._filtro = value;
  }

  public getOrdiniDaRitirare(){
    return this.clienteService.getOrdiniDaRitirare().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
  }

  public setRitirato(){
    return this.clienteService.settaRitirato(this._idOrdine).subscribe(()=>{
      alert("ritirato");
    })
  }

  public selectFilter(filtro:any){
    filtro = this._filtro;
    if(filtro=="tutti")this.getOrdini();
    if(filtro=="non completati")this.getOrdiniNonCompletati();
    if(filtro=="da ritirare")this.getOrdiniDaRitirare();
  }

  public getOrdiniNonCompletati(){
    return this.clienteService.getOrdiniNonCompletati().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
  }

  public getOrdini(){
    return this.clienteService.getOrdini().subscribe((data:Array<Ordine>)=>{
      this.settaDest(data);
    })
  }
  public get ordini(): Array<Ordine> {
    return this._ordini;
  }
  public set ordini(value: Array<Ordine>) {
    this._ordini = value;
  }

  public aggiorna(){
    this.getOrdini();

  }

}
