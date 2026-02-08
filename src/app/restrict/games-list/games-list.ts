import { Component } from '@angular/core';
import { Produto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './games-list.html',
  styleUrls: ['./games-list.css']
})
export class GamesList {

  public produtos: Produto[] = [];
  public produto: Produto = new Produto("", "", "", "", 0);

  constructor(private _produtoService: ProductService,
    private router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }

  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }

  excluir(id: string) {
    if (confirm("Deseja realmente excluir este jogo?")) { // Boa prática de UX
      this._produtoService.removerProduto(id).subscribe({
        next: (res) => {
          console.log("Excluído com sucesso");
          //Remover apenas o item do array localmente
          this.produtos = this.produtos.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error("Erro ao excluir", err);
          alert("Erro ao excluir o produto.");
        }
      })
    }
  }
}