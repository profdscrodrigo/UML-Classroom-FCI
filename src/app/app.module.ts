import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

//Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatRadioModule } from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';


//Componentes do projeto
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component'
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptor/auth.interceptor';
import { NgxMaskModule } from 'ngx-mask';
import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';
import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { TarefaListComponent } from './components/tarefa/tarefa-list/tarefa-list.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UsuarioListComponent,
    TarefaDeleteComponent,
    TarefaUpdateComponent,
    TarefaCreateComponent,
    TarefaListComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true 
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
