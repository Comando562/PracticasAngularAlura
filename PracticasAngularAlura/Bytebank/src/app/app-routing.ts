import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';

//AQUI SE MUESTRAN LAS RUTAS 

export const routes: Routes = [
  {
    path: '',   //Un pat es como decir como vamos a acceder a estos componentes | Aqui en caso que no exista alguna ruta nos redireccione automaticamente la ruta de estado
    redirectTo: 'estado',
    pathMatch: 'full',
  },
  {
    path: 'estado', //Esta ruta estado  es renderizar lo que viene siendo  el EstadoCuentaComponent
    component: EstadoCuentaComponent,
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //SE CONFIGURAN LAS RUTAS PARA EL PROYECTO COMPLETO
  exports: [RouterModule], //YA IMPORTADO TODO LO VA  A EXPORTAR
})
export class AppRoutingModule {}
