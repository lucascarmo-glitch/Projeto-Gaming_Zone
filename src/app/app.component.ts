import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Gaming-Zone';

  mostraMenu: boolean = true;
  mostraFooter: boolean = true;

  //Guardar inscrições para evitar vazamento de memória
  private subMenu?: Subscription;
  private subFooter?: Subscription;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.subMenu = this._loginService.getMostraMenu().subscribe(res => {
      this.mostraMenu = res;
    })
    this.subFooter = this._loginService.getMostraFooter().subscribe(res => {
      this.mostraFooter = res;
    })
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}