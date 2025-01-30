//EJERCICIO 1: REINTENTAR
//Crear una función "multiplicaciónPrimitiva", que en un 20% de los casos, multiplica dos números, y en el otro 80%, genera una excepción del tipo FalloUnidadMultiplicadora. 
//Escribir una función que envuelva esta función y siga intentando hasta que una llamada tenga éxito, después del cual retorna el resultado

class FalloUnidadMultiplicadora extends Error{}

function multiplicaciónPrimitiva(a,b){
    if(Math.random() < 0.2){
        return a*b
    }
    else{
        throw new FalloUnidadMultiplicadora("Se encuentra en el 80% que genera la excepción")
    }
}

function multiplicar(a,b){
    let resultado = null
    do {
        try {
        resultado = multiplicaciónPrimitiva(a,b)
    } catch (error) {
        console.log(error)
    }
    } while (resultado === null);
    return resultado

}

console.log(multiplicar(8,10))

//EJERCICIO 2: LA CAJA BLOQUEADA
//Considera el siguiente objeto:
const caja = {
    bloqueada:true,
    desbloquear(){
        this.bloqueada = false
        },
    bloquear(){this.bloqueada = true},
    _contenido: [],
    get contenido(){
        if(this.bloqueada) throw new Error("Bloqueada")
        return this._contenido
    },
    conCajaDesbloqueada(funcion){
        console.log("Se desbloquea la caja")
        this.desbloquear()
        try{
            funcion()
            }
            catch(error){
                console.log(error)
                }

        finally{
            this.bloquear()
            console.log("Se ha vuelvo a bloquear la caja")
        }
    }
}
//Crear una función donde tome una función como argumento, desbloquea la caja, ejecuta la función e independientemente de si la función arroja algún error o no, volver a bloquear la caja.


const saludarConError = function(){
    console.lo("Hola")
}
const saludar = function(){
    console.log("Hola")
}

caja.conCajaDesbloqueada(saludar)
caja.conCajaDesbloqueada(saludarConError)

//Ejercicio 