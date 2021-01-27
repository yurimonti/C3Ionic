import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommercianteService {
  private _sharedIdCommerciante:number;
  private url = "http://localhost:8080/commercianti";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }


  public logoutCommerciante(){
    this._sharedIdCommerciante=null;
  }

  public getOrdini():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCommerciante+"/ordiniInNegozio",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniNonCompletati():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCommerciante+"/ordiniInNegozioNonCompletati",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniPerRitiro():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCommerciante+"/ordiniInNegozioPerRitiro",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniDaSoddisfare():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCommerciante+"/ordiniDaSoddisfare",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public get sharedIdCommerciante() :number{
    return this._sharedIdCommerciante;
  }

  
  public set sharedIdCommerciante(v : number) {
    this._sharedIdCommerciante= v;
  }
  public getProdottiNegozio(){
    return this.http.get(this.url+"/"+this._sharedIdCommerciante+"/prodotti",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public eliminaProdotto(id:number){
      let idProdotto =id.toString();
    return this.http.delete(this.url+"/"+this._sharedIdCommerciante+"/eliminaProdotto",{
      headers:this.httpHeaders,
      params: {idProdotto}
    })
  }
  public aggiungiProdotto(nome:string,descrizione:string,prezzoNum:number,quantita:number){
    let prezzo = prezzoNum.toString();
    let numero = quantita.toString();
    return this.http.post(this.url+"/"+this._sharedIdCommerciante+"/aggiungiProdotto",null,{
      headers:this.httpHeaders,
      params: {nome,descrizione,prezzo,numero}
    })
  }
  public aggiungiQuantita(id:number,quantita:number){
    let idProdotto = id.toString();
    let numero = quantita.toString();
    let aggiunta = "true";
    return this.http.patch(this.url+"/"+this._sharedIdCommerciante+"/modificaProdotto",null,{
      headers:this.httpHeaders,
      params: {idProdotto,numero,aggiunta}
    })
  }
  public diminuisciQuantita(id:number,quantita:number){
    let idProdotto = id.toString();
    let numero = quantita.toString();
    let aggiunta = "false";
    return this.http.patch(this.url+"/"+this._sharedIdCommerciante+"/modificaProdotto",null,{
      headers:this.httpHeaders,
      params: {idProdotto,numero,aggiunta},
      responseType:'json'
    })
  }

  public setOrdineRitiroInNegozio(id:number){
    let idOrdine = id.toString();
    return this.http.patch(this.url+"/"+this._sharedIdCommerciante+"/ordini/ritiroInNegozio",null,{
      headers:this.httpHeaders,
      params:{idOrdine}
    })
  }
  public inviaChiamata(id:number){
    let idOrdine=id.toString();
    return this.http.post(this.url+"/"+this._sharedIdCommerciante+"/inviaChiamata",null,{
      headers:this.httpHeaders,
      params:{idOrdine}
    })
  }

}
