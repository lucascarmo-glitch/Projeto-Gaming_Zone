import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, RouterModule],
})
export class Login implements OnInit {
  
  usuario!: string;
  senha!: string;
  
  constructor(private _loginService: LoginService, private _router:
    Router) { }
  
    ngOnInit(): void {
  }
  
  fazerLogin() {
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(['restrict-menu']);
    this._loginService.setMostraMenu(false)
  }
}