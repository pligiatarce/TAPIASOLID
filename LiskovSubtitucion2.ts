//ejercicio de figuras geometricas
//EL RECTANGULO
//PAMELA LIGIA TAPIA ARCE
class Rectángulo {

    alto: number;
    ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }

    setAlto(value: number) {
        this.alto = value;
    }

    setAncho(value: number) {
        this.ancho = value;
    }

    area(): number {
        return this.alto * this.ancho;
    }

}
class Cuadrado extends Rectángulo {

    constructor(lado: number) {
        super(lado, lado);
    }

    setAlto(value: number) {
        if (value !== this.ancho) {
            throw new Error("EL CALCULO DEL CUADRADO ES DISTINTO A UN RECTANGULO");
        }

        super.setAlto(value);
        this.ancho = value;
    }

    setAncho(value: number) {
        if (value !== this.alto) {
            throw new Error("EL CALCULO DEL CUADRADO ES DISTINTO A UN RECTANGULO");
        }

        super.setAncho(value);
        this.alto = value;
    }
}
