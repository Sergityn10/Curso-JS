class Nemotecnia{
    constructor(stringInicio="", stringFinal="", campo, tecnica){
        this._Inicio = stringInicio;
        this._Final = stringFinal;
        this._Campo = campo;
        this._Tecnica = tecnica;
        
    }

    get Inicio(){
        return this._Inicio;
    }
    set Inicio(value){
        this._Inicio = value;
    }
    get Final(){
        return this._Final;
    }

    set Final(value){
        this._Final = value;
    }

    crearContraseña(){
        return this._Inicio + this._Final;
    }
    

}