import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  tarefa: Tarefa = {
    id: '',
    nome: '',
    comentario: '',
    usuario: '',
    dataCriacao: new Date(),
    dataConclusao: new Date(),
    perfis: []
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  comentario: FormControl = new FormControl(null, Validators.minLength(3));
  usuario: FormControl = new FormControl(null, Validators.minLength(3));
  dataCriacao: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));
  dataConclusao: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: TarefaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tarefa.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.tarefa.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tarefa = resposta;
    })
  }

  validaCampos(): boolean {
    return this.nome.valid && this.senha.valid;
  }
  
  addPerfil(perfil: any): void{
    if (this.tarefa.perfis.includes(perfil)){
      this.tarefa.perfis.splice(this.tarefa.perfis.indexOf(perfil), 1)
    } else {
      this.tarefa.perfis.push(perfil);
    }
  }

  update(): void {
    this.service.update(this.tarefa).subscribe(() => {
      this.toast.success('Tarefa atualizada com sucesso', 'Update');
      this.router.navigate(['tarefa'])
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
