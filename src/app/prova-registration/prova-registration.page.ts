import { Negozio } from './../negozio';
import { Commerciante } from './../commerciante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova-registration',
  templateUrl: './prova-registration.page.html',
  styleUrls: ['./prova-registration.page.scss'],
})
export class ProvaRegistrationPage implements OnInit {
  private _commerciante: Commerciante;
  private _negozio: Negozio;

  constructor() { }

  ngOnInit() {
    this.commerciante = new Commerciante();
    this.negozio = new Negozio();
  }

  public registration(){

  }

  public get negozio(): Negozio {
    return this._negozio;
  }
  public set negozio(value: Negozio) {
    this._negozio = value;
  }
  public get commerciante(): Commerciante {
    return this._commerciante;
  }
  public set commerciante(value: Commerciante) {
    this._commerciante = value;
  }

}
