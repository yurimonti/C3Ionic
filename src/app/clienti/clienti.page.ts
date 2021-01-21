import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Locker } from '../locker';
import { Negozio } from '../negozio';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss'],
})
export class ClientiPage implements OnInit {
  
  constructor(private clienteService:ClienteService,private router:Router){}
  ngOnInit(){}

  public logout(){
    this.clienteService.logoutCliente();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
  }
}
