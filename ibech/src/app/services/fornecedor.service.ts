import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.cfdonfig';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${id}`)
  }

  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${API_CONFIG.baseUrl}/fornecedores`);
  }

  create(tecnico: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores`, tecnico);
  }

  update(tecnico: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${tecnico.id}`, tecnico);
  }

  delete(id: any): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${id}`)
  }

}
