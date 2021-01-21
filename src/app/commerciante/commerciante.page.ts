import { CommercianteService } from './../commerciante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commerciante',
  templateUrl: './commerciante.page.html',
  styleUrls: ['./commerciante.page.scss'],
})
export class CommerciantePage implements OnInit {

  constructor(private commercianteService:CommercianteService) { }
  ngOnInit() {
  }

  public logout(){
    this.commercianteService.logoutCommerciante();
    alert("logout effettuato");
  }

}
