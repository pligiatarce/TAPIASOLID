//ejercicio de los animalitos
//PAMELA LIGIA TAPIA ARCE
class Pajaro {
    volar() {
        console.log('Caracteristica volar');
    }
}

class Pinguino {
    nadar() {
        console.log('Caracteristica nadar');
    }
}
class ganzo extends Pajaro {
    volar() {
        console.log("Caracteristica volar");
    }

    nadar() {
        console.log('Caracteristica nadar');
    }
}

class Animal {

    constructor(private Caracteristica: Pajaro) { }

    caracteristica() {
        this.Caracteristica.volar();
    }

}