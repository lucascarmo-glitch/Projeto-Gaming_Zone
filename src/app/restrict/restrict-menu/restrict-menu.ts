import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-restrict',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './restrict-menu.html',
  styleUrls: ['./restrict-menu.css']
})
export class RestrictMenu {
  
  constructor(private router: Router,
    private _loginService: LoginService) { }
  
    logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['login']);
  }
}