import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  private _b : RegistrationPage;
  private _type: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  

  public setTypeToCliente(){
    this._type= "cliente";
    this.router.navigate(["../registration/registration-cliente"]);
  }
  public setTypeToCommerciante(){
    this._type= "commerciante";
    this.router.navigate(["../registration/reg-commerciante"]);
  }
  public setTypeToCorriere(){
    this._type= "corriere";
    this.router.navigate(["../registration/registration-corriere"]);
  }

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
}
