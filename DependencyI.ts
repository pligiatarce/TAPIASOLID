//ejercicio del interruptor de luz
//PAMELA LIGIA TAPIA ARCE
abstract class Operador {
    abstract encender(): void;
    abstract apagar(): void;

}

class Luz extends Operador {
    encender() {
        console.log("enciende");
    }

    apagar() {
        console.log("apaga");
    }
}

class Interruptor {

    constructor(private Operador: Operador) { }

    operar() {
        this.Operador.encender();
    }

}
