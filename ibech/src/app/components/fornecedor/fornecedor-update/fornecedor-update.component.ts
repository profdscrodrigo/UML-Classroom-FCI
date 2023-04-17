import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: Fornecedor = {
    id: '',
    nome: '',
    cnpj: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cnpj: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: FornecedorService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fornecedor.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.fornecedor.id).subscribe(resposta => {
      resposta.perfis = [];
      this.fornecedor = resposta;
    })
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cnpj.valid && this.email.valid && this.senha.valid;
  }
  
  addPerfil(perfil: any): void{
    if (this.fornecedor.perfis.includes(perfil)){
      this.fornecedor.perfis.splice(this.fornecedor.perfis.indexOf(perfil), 1)
    } else {
      this.fornecedor.perfis.push(perfil);
    }
  }

  update(): void {
    this.service.update(this.fornecedor).subscribe(() => {
      this.toast.success('Técnico atualizado com sucesso', 'Update');
      this.router.navigate(['fornecedores'])
    }, ex => {
      console.log(ex);
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }

    });
  }

}
