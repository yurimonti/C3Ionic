import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-registration-cliente',
  templateUrl: './registration-cliente.page.html',
  styleUrls: ['./registration-cliente.page.scss'],
})
export class RegistrationClientePage implements OnInit {
  private _nome: string;
  private _cognome: string;
  private _email: string;
  private _password: string;
  private _type:string="cliente";
  constructor(private rService:RegistrationService, private router:Router) {}

  ngOnInit() {
  }

  
  public set type(v : string) {
    this._type = v;
  }
  
  public get type() : string {
    return this._type;
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
  

  public registration(){

    this.rService.registrationCliCor(this._nome,this._cognome,this._email,this._password,this._type).subscribe(data => {
      data = "registrazione completata";
      alert(data);
      this.router.navigate(["../../login"])
    });
  }
  

}
