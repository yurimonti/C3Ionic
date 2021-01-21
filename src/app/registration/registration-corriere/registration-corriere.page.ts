import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration-corriere',
  templateUrl: './registration-corriere.page.html',
  styleUrls: ['./registration-corriere.page.scss'],
})
export class RegistrationCorrierePage implements OnInit {

  private _nome: string;
  private _cognome: string;
  private _email: string;
  private _password: string;
  private _type:string="corriere";
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
