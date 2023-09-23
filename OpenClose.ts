//PAMELA LIGIA TAPIA ARCE
//EJERCICIO 1 LIBRO
//PAMELA LIGIA TAPIA ARCE
class libro {
    private titulo: string;
    private autor: number;
    private contenido: string;
    private tipo: string;

    constructor(titulo: string, autor: number, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(tituloNew: string) {
        return this.titulo = tituloNew;
    }
    public getAutor(): number {
        return this.autor;
    }
    public setAutor(autorNew: string) {
        return this.autor = autorNew;
    }
    public getContenido(): string {
        return this.contenido;
    }
    public setContenido(contenidoNew: string) {
        return this.contenido = contenidoNew;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setTipo(tipoNew: string) {
        return this.tipo = tipoNew;
    }
    mostrarDescripcion(){
        return this.contenido;
    }
    guardarEnBaseDeDatos(){
        console.log("Guardando los datos:...");
    }
}

