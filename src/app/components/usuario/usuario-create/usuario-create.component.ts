import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
    dataNascimento: new Date(),
    sexo: '',
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));
  dataNascimento: FormControl = new FormControl(null, Validators.minLength(1));
  sexo: FormControl = new FormControl(null, Validators.maxLength(1));


  constructor(
    private service: UsuarioService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }
  
  addPerfil(perfil: any): void{
    if (this.usuario.perfis.includes(perfil)){
      this.usuario.perfis.splice(this.usuario.perfis.indexOf(perfil), 1)
    } else {
      this.usuario.perfis.push(perfil);
    }
  }

  create(): void {
    this.service.create(this.usuario).subscribe(() => {
      this.toast.success('Parabéns Usuário cadastrado com sucesso!', 'Cadastro');
      this.router.navigate(['usuario'])
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
