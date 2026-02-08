import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/product.model';
import { ProductService } from '../product.service';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CurrencyPipe, NgFor],
  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class Games implements OnInit {

  public produtos: Produto[] = [];
  constructor(private _produtoService: ProductService) { }
  
  ngOnInit(): void {
    this.listarProdutos();
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
}
