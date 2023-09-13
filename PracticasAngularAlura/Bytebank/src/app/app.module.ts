import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [    //AQUI DECLARAMOS NUESTROS COMPONENTES
    AppComponent,
    NuevaTransferenciaComponent
  ],
  imports: [    //AQUI IMPORTAMOS NUESTROS FORMULARIOS
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
