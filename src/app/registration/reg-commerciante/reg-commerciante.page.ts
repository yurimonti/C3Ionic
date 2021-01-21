import { Router } from '@angular/router';
import { RegistrationService } from './../../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-commerciante',
  templateUrl: './reg-commerciante.page.html',
  styleUrls: ['./reg-commerciante.page.scss'],
})
export class RegCommerciantePage implements OnInit {
  private _nome: string;
  private _cognome: string;
  private _email: string;
  private _password: string;
  
  private _nomeNegozio: string;
  private _descrizione: string;
  private _indirizzo: string;
  private _orario: string;
  
  constructor(private registrationService:RegistrationService,private router:Router) { }
  
  ngOnInit() {
  }
  
  public registration(){
    this.registrationService.registrationCom(this.nome,this.cognome,this.email,this.password,this.nomeNegozio,
      this.descrizione,this.indirizzo,this.orario)
      .subscribe(data => {
        data = "registrazione completata";
        alert(data);
        this.router.navigate(["../../login"])
      });
  }
  
  public get cognome(): string {
    return this._cognome;
  }
  public set cognome(value: string) {
    this._cognome = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get nomeNegozio(): string {
    return this._nomeNegozio;
  }
  public set nomeNegozio(value: string) {
    this._nomeNegozio = value;
  }
  
  public get descrizione(): string {
    return this._descrizione;
  }
  public set descrizione(value: string) {
    this._descrizione = value;
  }
  
  public get indirizzo(): string {
    return this._indirizzo;
  }
  public set indirizzo(value: string) {
    this._indirizzo = value;
  }
  
  public get orario(): string {
    return this._orario;
  }
  public set orario(value: string) {
    this._orario = value;
  }

  
  
}
