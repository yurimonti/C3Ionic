import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorriereService {
  private _sharedIdCorriere:number;
  private url = "http://localhost:8080";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  
  public set shareIdCorriere(v : number) {
    this._sharedIdCorriere = v;
  }
  
  
  public get shareIdCorriere() : number {
    return this._sharedIdCorriere;
  }
  

  public logoutCorriere(){
    this._sharedIdCorriere=null;
  }

  public accettaChiamata(id:number){
    let idChiamata = id.toString();
    return this.http.delete(this.url+"/corrieri/"+this._sharedIdCorriere+"/accettaChiamata",{
      headers:this.httpHeaders,
      params:{idChiamata}
    })
  }

  public ritiraOrdine(id:number){
    let idChiamata = id.toString();
    return this.http.patch(this.url+"/corrieri/"+this._sharedIdCorriere+"/ordini/ritiraOrdine",null,{
      headers:this.httpHeaders,
      params:{idChiamata}
    })
  }

  public consegnaOrdine(id:number){
    let idChiamata = id.toString();
    return this.http.post(this.url+"/corrieri/"+this._sharedIdCorriere+"/ordini/consegnaOrdine",null,{
      headers:this.httpHeaders,
      params:{idChiamata}
    })
  }
  
}
