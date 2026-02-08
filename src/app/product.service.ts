import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs';
import { Produto } from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);

  }
  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.getProdutos().pipe(
      switchMap(produtos => {
        // Encontra o maior ID numérico, mesmo que armazenado como string
        const ultimoId = produtos.length > 0
          ? Math.max(...produtos.map(p => Number(p.id)))
          : 0;

        // Define o novo ID como o último + 1 convertido para String
        produto.id = (ultimoId + 1).toString();

        return this._httpClient.post<Produto>(this.url, produto);
      })
    );
  }

  getProduto(id: string): Observable<Produto> {
    return this._httpClient.get<Produto>(`${this.url}/${id}`);
  }

  atualizarProduto(id: string, produto: Produto): Observable<Produto> {
    return this._httpClient.put<Produto>(`${this.url}/${id}`, produto);
  }

  removerProduto(id: string): Observable<any> {
    return this._httpClient.delete(`${this.url}/${id}`);
  }
}
