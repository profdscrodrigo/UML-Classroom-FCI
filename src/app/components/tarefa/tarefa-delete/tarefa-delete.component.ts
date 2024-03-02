import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  tarefa: Tarefa = {
    id: '',
    nome: '',
    comentario: '',
    usuario: '',
    dataCriacao: new Date(),
    dataConclusao: new Date(),
    perfis: []
  }

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
  
  delete(): void {
    this.service.delete(this.tarefa.id).subscribe(() => {
      this.toast.success('Tarefa excluída com sucesso', 'Delete');
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
