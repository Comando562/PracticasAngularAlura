import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
