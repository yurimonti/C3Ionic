import { Observable } from 'rxjs';
import { Commerciante } from './commerciante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private url = "http://localhost:8080/register";
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  public registration( nome:string,cognome:string,email:string,password:string, nomeNegozio:string,
    descrizione:string,indirizzo:string,orario:string):Observable<any>{
    return this.http.post(this.url+"/registrationCommerciante",null,{
      headers:this.httpHeaders,
      params:{nome,cognome,email,password, nomeNegozio,descrizione,indirizzo,orario},
      responseType:'text'
    })
  }

}
