import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

//FUNCIONES QUE USAMOS EN LOS COMPONENTES
@Injectable({  //Con inyectabe es un metadata en donde le indicamos donde se va a usar este servicio
  providedIn: 'root', //Aqui indicamos que lo queremos usar en todo el
})
export class TransferenciasService {
  listatransferencias: any[];
  url: string = `http://localhost:3000/transferencias`;

  constructor(private HttpClient: HttpClient) {   //Inyectando dependencia
    this.listatransferencias = [];
  }

  todas(): Observable<Transferencia[]> {   //Nos va a traer todas las transferencias de nuestro backend
    return this.HttpClient.get<Transferencia[]>(this.url); //get-> le decimos que vamos a esperar un arreglo de diferentes transferencias | el metodo recibe el string URL de la class TransferenciasService
  }

  get transferencias() {
    return this.listatransferencias;
  }

  agregar(transferencia: Transferencia): Observable<Transferencia> {
    // this.transferencias.push(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia); //el post es un observable que lo va a mandar hacia nuestro backend
  }
}
