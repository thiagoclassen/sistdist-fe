import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../server';
import { Vaga } from './vaga';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

  listVagas(): Observable<any[]> {
    return this.http.get<any[]>(SERVER + '/vagas');
  }

  getVaga(id: String): Observable<any> {
    return this.http.get<any>(SERVER + '/vaga/' + id);
  }

  createVaga(vaga: Vaga) {
    return this.http.post(SERVER + '/vagas', vaga);
  }

  updateVaga(vaga: Vaga) {
    return this.http.put(SERVER + '/vagas', vaga);
  }
}
