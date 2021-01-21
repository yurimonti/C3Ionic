import { CommercianteService } from './commerciante.service';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:8080/login";
  private httpHeader:HttpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
  private _sharedId:number;

  constructor(private http:HttpClient,private clienteService:ClienteService,private commercianteService :CommercianteService) { }

  public get sharedId() : number {
    return this._sharedId;
  }
  
  public set sharedId(v : number) {
    this._sharedId = v;
  }

  public setSharedId(v : number,type:string){
    this._sharedId = v;
    if(type=="cliente")this.clienteService.sharedIdCliente=this.sharedId;
    if(type=="commerciante")this.commercianteService.sharedIdCliente=this._sharedId;
  }

  public verifyLogin(type:string,email:string,password:string):Observable<any> {
    return this.http.get(this.url,{
      headers:this.httpHeader,
      params:{ type,email,password},
      responseType:'json'
    })
  }

}
