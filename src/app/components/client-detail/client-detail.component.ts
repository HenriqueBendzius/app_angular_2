



import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  Cliente?:Cliente;
  clienteForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute , private ClienteService:ClienteService, private FormBuilder: FormBuilder){

this.getClientByld();

  }

  id?:string;
  getClientByld(){
     this.id = this.route.snapshot.paramMap.get('id')?? '';
     this.ClienteService.getById(this.id).subscribe((clienteResponse) => (this.Cliente = clienteResponse))

     this.clienteForm = this.FormBuilder.group({
        nome:[this.Cliente?.nome],
        telefone:[this.Cliente?.telefone],
        id:[this.Cliente?.id]
     })

    // alert(this.id);
  }

  update(): void{
    if (this.clienteForm.valid) {
      const clienteNovo: Cliente = {
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone,
        id: this.clienteForm.value.id

      }
      this.ClienteService.atualizar(clienteNovo).subscribe()
      alert('alterado com sucesso')
      };

  }

}
