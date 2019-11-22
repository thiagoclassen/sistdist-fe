import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../server';
import { Curriculo } from './curriculo';

@Injectable({
  providedIn: 'root'
})
export class CurriculosService {



  constructor(private http: HttpClient) { }

  listCurriculos(): Observable<any[]> {
    return this.http.get<any[]>(SERVER + '/curriculos');
  }

  getCurriculo(id: String): Observable<any> {
    return this.http.get<any>(SERVER + '/curriculo/' + id);
  }

  createCurriculo(curriculo: Curriculo) {
    return this.http.post(SERVER + '/curriculos', curriculo);
  }

  updateCurriculo(curriculo: Curriculo) {
    return this.http.put(SERVER + '/curriculos', curriculo);
  }


}
