class Persona{
    #nombre = " def nombre";
    #edad = "def edad";

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        return this.#edad;
    }
}

export default Persona;