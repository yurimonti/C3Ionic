import { Router } from '@angular/router';
import { CorriereService } from './../corriere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corriere',
  templateUrl: './corriere.page.html',
  styleUrls: ['./corriere.page.scss'],
})
export class CorrierePage implements OnInit {

  constructor(private corriereService:CorriereService,private router:Router) { }

  ngOnInit() {
  }

  public logout(){
    this.corriereService.logoutCorriere();
    alert("logout effettuato");
    this.router.navigate(["../login"]);
 
  }
}
