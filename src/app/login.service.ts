import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'; // Adicionado

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // Ao atualizar a página, verifique se o token existe
  private logado(): boolean {
    return !!localStorage.getItem('token');
  }
  
  //Se estiver logado (token existe)
  private mostraMenu = new BehaviorSubject<boolean>(!this.logado());
  private mostraFooter = new BehaviorSubject<boolean>(!this.logado());

  constructor(private router: Router) { }

  login(usuario: string, senha: string) {
    if (usuario === "adm" && senha === "2026") {
      localStorage.setItem('token', 'qwer1234');

      this.mostraMenu.next(false);
      this.mostraFooter.next(false)
      this.router.navigate(['restrict-menu']);
    } else {
      alert("Usuário ou senha inválidos!");
      this.mostraMenu.next(true);
      this.mostraFooter.next(true);
    }
  }

  private atualizarStatus(exibir: boolean) {
    this.mostraMenu.next(exibir);
    this.mostraFooter.next(exibir);
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }

  setMostraFooter(valor: boolean) {
    return this.mostraFooter.next(valor);
  }

  getMostraFooter() {
    return this.mostraFooter.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.mostraMenu.next(true);
    this.mostraFooter.next(true);
    this.router.navigate(['/login']);
  }
}