import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estado',
    pathMatch: 'full',
  },
  {
    path: 'estado',
    component: EstadoCuentaComponent,
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
