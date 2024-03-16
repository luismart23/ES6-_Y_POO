"use strict";

var _personaModule = require("./persona.module.js");
var _libroModule = require("./libro.module.js");
var papelucho = new _libroModule.Libro("Papelucho", "Marcela Paz", 19000);
var fundacion = new _libroModule.Libro("Fundación", "Isaac Asimov", 8000);
var harry = new _libroModule.Libro("Harry Potter", "J.K. Rowling", 15000);
var luis = new _personaModule.Persona("Luis");
luis.agregarLibro(papelucho);
luis.agregarLibro(fundacion);
luis.agregarLibro(harry);
luis.buscarLibroPorAutor("Isaac Asimov");
luis.sumaTotalDePrecios();
console.log(luis);