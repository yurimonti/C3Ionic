import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommercianteService {
  private _sharedIdCliente:number;
  private url = "http://localhost:8080";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  public logoutCommerciante(){
    this._sharedIdCliente=null;
  }

  public get sharedIdCliente() :number{
    return this._sharedIdCliente;
  }

  
  public set sharedIdCliente(v : number) {
    this._sharedIdCliente = v;
  }

}
