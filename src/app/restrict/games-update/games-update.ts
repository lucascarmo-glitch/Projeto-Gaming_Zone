import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './games-update.html',
  styleUrls: ['./games-update.css']
})
export class GamesUpdate implements OnInit {

  public produtoId: string = "";
  public produto: Produto = new Produto("", "", "", "", 0);

  constructor(private _produtoService: ProductService, private _activatedRoute:
    ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe(params => this.produtoId =
      params['id']);
  }

  ngOnInit(): void {
    this.produtoId = this._activatedRoute.snapshot.paramMap.get('id') || "";
    this.listarProduto();
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe((res: any) => {
      // O json-server às vezes retorna um array no filtro ou objeto direto no ID
      const p = Array.isArray(res) ? res[0] : res;
      this.produto = new Produto(p.id, p.produto, p.descricao, p.foto, p.preco);
    });
  }

  atualizar(id: string) {
    this._produtoService.atualizarProduto(id, this.produto).subscribe({
      next: () => {
        this._router.navigate(['/restrict-menu/list']);
      },
      error: (err) => console.error(err)
    });
  }
}
