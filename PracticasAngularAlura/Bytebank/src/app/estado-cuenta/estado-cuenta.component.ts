import { Component, OnInit, Input } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';
//ESTE COMPONENTE SE ENCARGA DE MOSTRAR TODA LA LISTA DE NUESTRAS TRANSFERENCIAS 

@Component({ //COMPONENTES A INYECTAR
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss'],
})
export class EstadoCuentaComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciasService) {}   //Aqui inyectamos un servicio

  ngOnInit(): void {   //Aqui vamos a poder tener acceso a esa lista 
    this.service.todas().subscribe((m: Transferencia[]) => {//Va a estar escuchando cada vez que se realice un cambio
      this.transferencias = m;
    });
  }
}
