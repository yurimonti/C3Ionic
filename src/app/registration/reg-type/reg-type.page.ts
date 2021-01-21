import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-type',
  templateUrl: './reg-type.page.html',
  styleUrls: ['./reg-type.page.scss'],
})
export class RegTypePage implements OnInit {

  private _type: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  public setTypeToCliente(){
    this._type= "cliente";
    alert(this._type);
    this.router.navigate(["../../registration"]);
  }
  public setTypeToCommerciante(){
    this._type= "commerciante";
    alert(this._type);
    this.router.navigate(["../../registration/reg-commerciante"]);
  }
  public setTypeToCorriere(){
    this._type= "corriere";
    alert(this._type);
    this.router.navigate(["../../registration"]);
  }

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  

}
