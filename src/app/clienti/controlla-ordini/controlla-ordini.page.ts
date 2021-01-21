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
  constructor(private clienteService:ClienteService) {}
  
  ngOnInit() {
    this.getOrdini();
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
      this._ordini=data;
    })
  }

  public setRitirato(){
    return this.clienteService.settaRitirato(this._idOrdine).subscribe((data:string)=>{
      alert(data);
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
      this._ordini=data;
    })
  }

  public getOrdini(){
    return this.clienteService.getOrdini().subscribe((data:Array<Ordine>)=>{
      this._ordini=data;
    })
  }
  public get ordini(): Array<Ordine> {
    return this._ordini;
  }
  public set ordini(value: Array<Ordine>) {
    this._ordini = value;
  }

}
