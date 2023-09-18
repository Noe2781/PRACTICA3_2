class Autos{
    #marca = "def marca";
    #modelo = "def modelo";

    setMarca(marca){
        this.#marca = marca;
    }
    getMarca(){
        return this.#marca;
    }

    setModelo(modelo){
        this.#modelo = modelo;
    }
    getModelo(){
        return this.#modelo;
    }

}
export default Autos;
