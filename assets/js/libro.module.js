export class Libro {
    #titulo;
    #autor;
    #precio;

    constructor(titulo, autor, precio) {
        this.#titulo = titulo
        this.#autor = autor
        this.#precio = precio

    }

    get getautor() {
        return this.#autor
    }

    get getprecio() {
        return this.#precio
    }
}