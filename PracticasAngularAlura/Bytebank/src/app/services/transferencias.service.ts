import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  listatransferencias: any[];
  url: string = `http://localhost:3000/transferencias`;

  constructor(private HttpClient: HttpClient) {
    this.listatransferencias = [];
  }

  todas(): Observable<Transferencia[]> {
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  get transferencias() {
    return this.listatransferencias;
  }

  agregar(transferencia: Transferencia): Observable<Transferencia> {
    // this.transferencias.push(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }
}
