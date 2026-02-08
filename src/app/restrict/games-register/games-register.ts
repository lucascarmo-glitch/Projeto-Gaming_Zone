import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './games-register.html',
  styleUrls: ['./games-register.css']
})
export class GamesRegister implements OnInit {

  public produto: Produto = new Produto("", "", "", "", 0);
  constructor(private _produtoService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this._produtoService.cadastrarProduto(this.produto).subscribe({
      next: (res) => {
        alert("Cadastro Efetuado com Sucesso!");
        this.router.navigate(["/restrict-menu/list"]);
      },
      error: (err) => {
        console.error("Erro ao cadastrar:", err);
        alert("Erro ao cadastrar o produto.");
      }
    });
  }
}