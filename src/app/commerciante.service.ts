import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommercianteService {
  private _sharedIdCommerciante:number;
  private url = "http://localhost:8080";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }


  public logoutCommerciante(){
    this._sharedIdCommerciante=null;
  }

  public getOrdini():Observable<any>{
    return this.http.get(this.url+"/commercianti/"+this._sharedIdCommerciante+"/ordiniInNegozio",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniNonCompletati():Observable<any>{
    return this.http.get(this.url+"/commercianti/"+this._sharedIdCommerciante+"/ordiniInNegozioNonCompletati",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniPerRitiro():Observable<any>{
    return this.http.get(this.url+"/commercianti/"+this._sharedIdCommerciante+"/ordiniInNegozioPerRitiro",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdiniDaSoddisfare():Observable<any>{
    return this.http.get(this.url+"/commercianti/"+this._sharedIdCommerciante+"/ordiniDaSoddisfare",{
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

}
