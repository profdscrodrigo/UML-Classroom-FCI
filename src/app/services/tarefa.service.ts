import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${API_CONFIG.baseUrl}/tarefa/${id}`)
  }

  findAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${API_CONFIG.baseUrl}/tarefa`);
  }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${API_CONFIG.baseUrl}/tarefa`, tarefa);
  }

  update(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${API_CONFIG.baseUrl}/tarefa/${tarefa.id}`, tarefa);
  }

  delete(id: any): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${API_CONFIG.baseUrl}/tarefa/${id}`)
  }

}
