import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorriereService {
  private _sharedIdCorriere:number;
  private url = "http://localhost:8080/corrieri";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  
  public set shareIdCorriere(v : number) {
    this._sharedIdCorriere = v;
  }
  
  
  public get shareIdCorriere() : number {
    return this._sharedIdCorriere;
  }

  public getInfoOrdine(id:number){
    let idOrdine = id.toString();
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini/informazioni",{
      headers:this.httpHeaders,
      params:{idOrdine},
      responseType:'text'
    })

  }

  public getOrdiniDaRitirare():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini/daRitirare",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }
  public getOrdiniInConsegna():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini/inConsegna",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }
  public getOrdiniConsegnati():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini/consegnati",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }
  public getOrdiniCompletati():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini/completati",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public getOrdini():Observable<any>{
    return this.http.get(this.url+"/"+this._sharedIdCorriere+"/ordini",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }
  
  public getChiamate():Observable<any>{
    return this.http.get(this.url+"/chiamate",{
      headers:this.httpHeaders,
      responseType:'json'
    })
  }

  public logoutCorriere(){
    this._sharedIdCorriere=null;
  }

  public accettaChiamata(id:number):Observable<any>{
    let idChiamata = id.toString();
    return this.http.delete(this.url+"/"+this._sharedIdCorriere+"/accettaChiamata",{
      headers:this.httpHeaders,
      params:{idChiamata}
    })
  }

  public ritiraOrdine(id:number):Observable<any>{
    let idOrdine = id.toString();
    return this.http.patch(this.url+"/"+this._sharedIdCorriere+"/ordini/ritiraOrdine",null,{
      headers:this.httpHeaders,
      params:{idOrdine}
    })
  }

  public consegnaOrdine(id:number):Observable<any>{
    let idOrdine = id.toString();
    return this.http.post(this.url+"/"+this._sharedIdCorriere+"/ordini/consegnaOrdine",null,{
      headers:this.httpHeaders,
      params:{idOrdine}
    })
  }
  
}
