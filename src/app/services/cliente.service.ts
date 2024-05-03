





// import { Cliente } from './../interfaces/Cliente';

import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientesUrl = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  clientes: Cliente[] = [
    /*{ id: 'fdaklfads', nome: 'Thiago Xavier' },
    { id: 'teste', nome: 'Teste 2', telefone: '2345678' },*/
  ];

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>;
    //return this.clientes;
  }

  getById(id:string){
    return this.http.get(`${this.clientesUrl}/${id}`) as Observable<Cliente>
  }

  remover(id: string) {
    // const cliente = this.clientes.find((c) => c.id == id);

    // if (cliente) {
    //   const index = this.clientes.indexOf(cliente);
    //   this.clientes.splice(index, 1);
    // }
    return this.http.delete(`${this.clientesUrl}/${id}`)
  }

  atualizar(cliente:Cliente){
  return this.http.put(`${this.clientesUrl}/${cliente.id}`,cliente , this.httpHeader)

  }
   httpHeader = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  adicionar(cliente: Cliente) {

    return this.http.post(this.clientesUrl, cliente, this.httpHeader)
    //this.re
  }
}
