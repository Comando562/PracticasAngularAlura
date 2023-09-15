//ya con esto lo que nosotros vamos a poder hacer es justamente mandar a llamar esta interfaz con la cual vamos a poder saber cuál es la
// estructura del objeto que nosotros vamos a estar esperando en lo que conlleva la parte de las transferencias.
export interface Transferencia {
  id?: string;  //Indicamos que no es necesario tener forzozamente el id y la fecha por que lo vamos ir agregando
  valor: string;
  destino: string;
  fecha?: string | Date;
}
