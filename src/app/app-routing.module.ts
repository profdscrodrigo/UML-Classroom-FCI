import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';
import { TarefaListComponent } from './components/tarefa/tarefa-list/tarefa-list.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';

//criação de rota para os menus segue abaixo
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', component: NavComponent, canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent },
    { path: 'tarefa/update/:id', component: TarefaUpdateComponent },
    { path: 'tarefa/delete/:id', component: TarefaDeleteComponent },
    { path: 'usuario', component: UsuarioListComponent },
    { path: 'usuario/create', component: UsuarioCreateComponent },
    { path: 'usuario/update/:id', component: UsuarioUpdateComponent },
    { path: 'usuario/delete/:id', component: UsuarioDeleteComponent },
    { path: 'tarefa', component: TarefaListComponent },
    { path: 'tarefa/create', component: TarefaCreateComponent },
    
   
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
