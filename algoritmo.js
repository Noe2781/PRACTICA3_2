import Persona from "./persona.js";
import Autos from"./autos.js";
const personaNueva = new Persona();
personaNueva.setNombre("Noelia");
console.table(personaNueva.getNombre());

const edadNueva = new Persona();
edadNueva.setEdad("32");
console.table(edadNueva.getEdad());



const marcaNueva= new Autos();
marcaNueva.setMarca("Toyota");
console.table(marcaNueva.getMarca());

const modeloNuevo= new Autos();
modeloNuevo.setModelo("2010");
console.table(modeloNuevo.getModelo());





