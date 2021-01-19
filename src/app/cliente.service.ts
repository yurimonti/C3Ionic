import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private _sharedIdCliente:number;
  private url = "http://localhost:8080";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  public getLockers():Observable<any>{
    return this.http.get(this.url+"/lockers",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getNegozi():Observable<any>{
    return this.http.get(this.url+"/negozi",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getProdotti(id:number):Observable<any>{
    return this.http.get(this.url+"/negozi/negozio/"+id,{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public setEmittente(numberId:number):Observable<any>{
    let idNegozio = numberId.toString();
    return this.http.post(this.url+"/clienti/setEmittente",null,{
      headers:this.httpHeaders,
      params:{idNegozio},
      responseType:'text'
    })
  }

  public setDestinazione(numberId:number):Observable<any>{
    let idLocker = numberId.toString();
    return this.http.post(this.url+"/clienti/setDestinazione",null,{
      headers:this.httpHeaders,
      params:{idLocker},
      responseType:'text'
    })
  }

  public addOrdine(numberId:number):Observable<any>{
    let id = numberId.toString();
    return this.http.post(this.url+"/clienti/"+id+"/aggiungiOrdine",null,{
      headers:this.httpHeaders,
      responseType:'text'
    })
  }

  public annullaOrdine():Observable<any>{
    return this.http.post(this.url+"/clienti/annullaOrdine",null,{
      headers:this.httpHeaders,
      responseType:'text'
    })
  }

  public setProdotto(numberIdProdotto:number,numberNumero:number):Observable<any>{
    let idProdotto = numberIdProdotto.toString();
    let number = numberNumero.toString();
    return this.http.post(this.url+"/clienti/setProdotto",null,{
      headers:this.httpHeaders,
      params:{idProdotto,number},
      responseType:'text'
    })
  }
  
  public get sharedIdCliente() :number{
    return this._sharedIdCliente;
  }

  
  public set sharedIdCliente(v : number) {
    this._sharedIdCliente = v;
  }
  
  

}
