import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuario/${id}`)
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/usuario`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/usuario`, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${API_CONFIG.baseUrl}/usuario/${usuario.id}`, usuario);
  }

  delete(id: any): Observable<Usuario> {
    return this.http.delete<Usuario>(`${API_CONFIG.baseUrl}/usuario/${id}`)
  }

}
