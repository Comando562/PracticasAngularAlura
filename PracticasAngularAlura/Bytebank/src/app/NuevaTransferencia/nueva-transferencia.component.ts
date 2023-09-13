//AQUI VAMOS ADEFINIR LA FUNCIONALIDAD DEL COMPONENTE

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nueva-transferencia',   //Asi vamos a querer llamar a nuestro componente
    templateUrl: './nueva-transferencia.component.html', //Aqui le decimos en donde va  a obtener la estructura de nuestro componente
    styleUrls: ['./nueva-transferencia.component.scss'],
})
export class NuevaTransferenciaComponent { 
    @Output() enviarDatos = new EventEmitter<any>() // Con output podemos exponer informacion fuera de nuestro componente | emitira un evento y este evento  va a recibir un objeto o la info que se quiere recibir

    valor: string = ''; //Que la variable empiece con un valor vacio

    destino: string = '';//Si ponemos un valor aqui , este valor no se puede cambiar si en el ngModule no se pusieron los corchetes [(ngModule)], lo que tenga en el input se va  a modificar en mi clase

    transferir(){  //FUNCION  | De la directiva ngSubmit de HTML ya que el usuario le haya dado clic aqui se ejecutara esta funcion 
        const datos = {
            valor: this.valor,
            destino: this.destino
        }
        this.enviarDatos.emit(datos);  //Al momento de darle clic al boton se manda  a llamar esta func de transferir
        this.limpiarCampos();
    }

    limpiarCampos(){
        this.valor = '';
        this.destino ='';
    }
}
