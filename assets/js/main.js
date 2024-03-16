import { Persona } from "./persona.module.js"
import { Libro } from "./libro.module.js"


const papelucho = new Libro("Papelucho", "Marcela Paz", 19000)
const fundacion = new Libro("Fundación", "Isaac Asimov", 8000)
const harry = new Libro("Harry Potter", "J.K. Rowling", 15000)

const luis = new Persona("Luis")
luis.agregarLibro(papelucho)
luis.agregarLibro(fundacion)
luis.agregarLibro(harry)

luis.buscarLibroPorAutor("Isaac Asimov")
luis.sumaTotalDePrecios()

console.log(luis)