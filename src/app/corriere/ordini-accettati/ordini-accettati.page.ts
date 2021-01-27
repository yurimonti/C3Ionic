import { Ordine } from './../../ordine';
import { Router } from '@angular/router';
import { CorriereService } from '../../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordini-accettati',
  templateUrl: './ordini-accettati.page.html',
  styleUrls: ['./ordini-accettati.page.scss'],
})
export class OrdiniAccettatiPage implements OnInit {
  private _ordini: Array<Ordine>;
  private _filtro:string;
  private _id:number;

  constructor(private corriereService:CorriereService,private router:Router) { }

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
    if(filtro=="in consegna")this.getOrdiniInConsegna();
    if(filtro=="completati")this.getOrdiniCompletati();
    if(filtro=="consegnati")this.getOrdiniConsegnati();
    if(filtro=="da ritirare")this.getOrdiniDaRitirare();
  }

  public getInfoOrdine(){
    this.corriereService.getInfoOrdine(this._id).subscribe((data:string)=>alert(data))
  }

  getOrdiniConsegnati() {
    this.corriereService.getOrdiniConsegnati().subscribe((data:Array<Ordine>)=>{
      this._ordini=data;
    })
  }
  getOrdiniDaRitirare() {
    this.corriereService.getOrdiniDaRitirare().subscribe((data:Array<Ordine>)=>{
      this._ordini=data;
    })
  }
  getOrdiniCompletati() {
    this.corriereService.getOrdiniCompletati().subscribe((data:Array<Ordine>)=>{
      this._ordini=data;
    })
  }
  getOrdiniInConsegna() {
    this.corriereService.getOrdiniInConsegna().subscribe((data:Array<Ordine>)=>{
      this._ordini=data;
    })
  }

  public getOrdini(){
    this.corriereService.getOrdini().subscribe((data:Array<Ordine>)=>{
      this._ordini = data;
    })
  }

  public get ordini(): Array<Ordine> {
    return this._ordini;
  }
  public set ordini(value: Array<Ordine>) {
    this._ordini = value;
  }


  
  public set id(v : number) {
    this._id = v;
  }

  
  public get id() : number {
    return this._id;
  }

  public ritiraOrdine(){
    this.corriereService.ritiraOrdine(this._id).subscribe();
  }
  public consegnaOrdine(){
    this.corriereService.consegnaOrdine(this._id).subscribe();
  }
  
  public logout(){
    this.corriereService.logoutCorriere();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }

  public indietro(){
    this.router.navigate(["../../corriere"]);

  }
}
