import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencia: any = {

  }

  transferir($event : any){
    console.log("Este mensaje es del componente APP",$event)
    this.transferencia = $event //transferencia v a a ser igual a la informacion que venga de nuestro evento 
  }
}
