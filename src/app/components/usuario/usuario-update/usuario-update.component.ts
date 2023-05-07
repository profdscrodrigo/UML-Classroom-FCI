import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

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
  dataNascimento: FormControl = new FormControl(null, Validators.maxLength(10));
  sexo: FormControl = new FormControl(null, Validators.maxLength(1));

  constructor(
    private service: UsuarioService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id).subscribe(resposta => {
      resposta.perfis = [];
      this.usuario = resposta;
    })
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

  update(): void {
    this.service.update(this.usuario).subscribe(() => {
      this.toast.success('usuario atualizado com sucesso', 'Update');
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
