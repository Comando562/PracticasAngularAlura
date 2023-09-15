import { Component, OnInit, Input } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';

@Component({ //COMPONENTES A INYECTAR
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss'],
})
export class EstadoCuentaComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciasService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((m: Transferencia[]) => {
      this.transferencias = m;
    });
  }
}
