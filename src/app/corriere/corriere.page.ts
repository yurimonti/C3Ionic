import { Chiamata } from './../chiamata';
import { Router } from '@angular/router';
import { CorriereService } from './../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corriere',
  templateUrl: './corriere.page.html',
  styleUrls: ['./corriere.page.scss'],
})
export class CorrierePage implements OnInit {
  private _chiamate: Array<Chiamata>;
  
  constructor(private corriereService:CorriereService,private router:Router) { }
  
  ngOnInit() {
    this.getChiamate();
  }
  public get chiamate(): Array<Chiamata> {
    return this._chiamate;
  }
  public set chiamate(value: Array<Chiamata>) {
    this._chiamate = value;
  }

  public getChiamate(){
    this.corriereService.getChiamate().subscribe((data:Array<Chiamata>)=>{
      this._chiamate = data;
    })
  }

  public logout(){
    this.corriereService.logoutCorriere();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }
}
