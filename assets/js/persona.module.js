export class Persona {
    #nombre;
    #libros;

    constructor(nombre) {
        this.#nombre = nombre
        this.#libros = []
    }

    agregarLibro(libro) {
        this.#libros.push(libro)
    }

    buscarLibroPorAutor(autor) {
        const libroEncontrado = this.#libros.find((libro) => libro.getautor === autor)
        console.log(libroEncontrado)
        return libroEncontrado
    }
    sumaTotalDePrecios() {
        // reduce
        const sumaTotal = this.#libros.reduce((acc, curr) => acc + curr.getprecio, 0)
        console.log(sumaTotal)
        return sumaTotal
    }
}