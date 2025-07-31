//EJERCICIO 1. GOLF REGEXP
//Golf RegExp es la práctica de escribir una expresión regular tan pequeña como sea posible 
//para que coincida con un patrón dado, y solo con ese patrón.

//1.1- car y cat
console.log("Ejercicio 1.1")
let car = /ca[rt]/

let string1 = "car"
let string2 = "Hola, cat "
console.log(car.test(string1))
console.log(car.test(string2))

//1.2- pop y prop
console.log("\nEjercicio 1.2")
let pop = /pr?op/ 
let string3 = "prop"
let string4 = "HOla prop"
console.log(pop.test(string3))
console.log(pop.test(string2))
console.log(pop.test(string4))
console.log(pop.exec(string4))
console.log(string4[5])

//-----    -------------------------------
//1.3-"ferret", "ferry" y "ferrari"
console.log("\nEjercicio 1.3")
let ferret = /ferr(et|y|ari)/
let string5="Tengo un ferrari"
let string6 = "ferret"
let string7 = "Mi ferry"
console.log(ferret.test(string5))
console.log(ferret.test(string6))
console.log(ferret.test(string7))
console.log("Probando con la función exec")
console.log(ferret.exec(string5))
console.log(ferret.exec(string6))
console.log(ferret.exec(string7))

//-----    -------------------------------
//1.4- Cualquier palabra que termine en "ious"
console.log("\nEjercicio 1.4")
let wordIous = /\b\w+ious\b/
let string8 = "Había un poco de ambicioso"
let string9 = "Había un poco de ambicioso y un poco de ambicious"
console.log(wordIous.test(string8))
console.log(wordIous.test(string9))

console.log(wordIous.exec(string9))

//-----    -------------------------------
//1.5- Un carácter de espacio en blanco seguido de un punto, coma, dos puntos o punto y coma.
console.log("\nEjercicio 1.5")
let espacios = / [.,:;]/
let string10 = "Hola, soy un programador."
let string11 = "Hola ; soy un programador."
let string12 = "; :"
console.log(espacios.test(string10))
console.log(espacios.test(string11))
console.log(espacios.test(string12))
console.log(espacios.exec(string11))

//-----------------------------------------------
//1.6- Una palabra con más de seis letras
console.log("\nEjercicio 1.6")
let palabra = /\b\w{7,}\b/
let string13 = "Hola soy un programador"
let string14 = "sin más de 6 letras"
console.log(palabra.test(string13)) //true
console.log(palabra.test(string14)) //false
console.log(palabra.exec(string13)) //true
console.log(palabra.exec(string14)) //false


//-----------------------------------------------
//1.7- Una palabra sin la letra e (o E)
console.log("\nEjercicio 1.7")
let sinE = /\b[^e\s]+\b/i
let string15 = "El programador"
let string16 = "estrella la"
console.log(sinE.test(string13)) //false
console.log(sinE.test(string15)) //false
console.log(sinE.test(string16)) //true
console.log(sinE.exec(string15)) //false
console.log(sinE.exec(string16)) //true

//-----------------------------------------------
//EJERCICIO 2: ESTILO ENTRE COMILLAS
//Crear una función que reemplaze todas las citas con comillas simples por comillas dobles, pero manteniendo las comillas simples
//usadas en contracciones como "aren`t"
console.log("\nEjercicio 2")

    let expresionComillas = /'(.)+'/g
    let unaComilla = /'.+'/
    console.log(unaComilla.test("Hola\' a\'"))
    console.log(expresionComillas.test("Cita: \' Hola \'"))

function reemplazarComillas(string) {
    let expresionComillas = /'(.+)*'/g
    return string.replace(expresionComillas, `\"$1\"`)

}
console.log(reemplazarComillas("Crear una cita: \'Hola mundo\'"))

//EJERCICIO 1: Correo electrónico
//Implementa una función que compruebe que, dado un string, coincida con un correo electrónico.
function isEmail(correo) {
    
}

//EJERCICIO 2: Nombre de usuario que contenga unos caracteres específicos.
//Implementar una función que compruebe si un string coincide con la expresión o expresiones dados. 
//Devuelve un objeto con dos parametros: 
    //1-Lista de mensajes de erroes
    //2-Estado de coincidencia: true si cumple todas las expresiones regulares o false si al menos una falla
    // si coincide con todas las expresiones o un objeto array con los mensajes de erores de cada expresión
//que no cumpla.

class ExpresionConError{
    constructor(expresiones, error) {
        this.expresiones = expresiones
        this.error = error
        }
}

class ExprUsername{
    constructor(listaExpresiones){
        this.listaExpresiones = listaExpresiones
    }
    addExpresion(expr){
        if(Object.getPrototypeOf(expr) !== ExpresionConError.prototype)
            throw new Error(`Tipo de objeto incorrecto a añadir: Asegúrate que el parametro a añaidir es del tipo ${ExpresionConError.name} `)
        this.listaExpresiones.push(expr)
    }
    
    comprobarUsername(expresiones,string){
        
        if(Object.getPrototypeOf(expresiones) !== ExprUsername.prototype){
            throw new Error("El parametro de entrada de expresiones no es del tipo adecuado: asegurate que se trata de un objeto ExprUsername")
        }
        let errores = []
        let estado = true
        console.log(this.listaExpresiones)
        for(let i = 0; i < this.listaExpresiones.length;i++){
            console.log("Entramos en el bucle")
            let expresion = this.listaExpresiones[i]
            console.log(`Mostrando expresion: ${expresion}`)
            let testExp = expresion.expresiones.test(string)
            if(!testExp){
                errores.push(expresion.error)
            }
            
            
        }   
        
        let resultado = {
            errores: errores,
            estado: errores.length>0? false:true
        }
        return resultado
    }
}


let expreUser = new ExprUsername([])
let mas8caracteres = new ExpresionConError( /\w{8,}/,"Debe contener más de 8 caracteres")
let asterisco = new ExpresionConError(/\*/,"Debe contener un asterisco")
expreUser.addExpresion(mas8caracteres)
expreUser.addExpresion(asterisco)
console.log(expreUser.listaExpresiones.length)
console.log(expreUser.comprobarUsername(expreUser, "Sergiofadf"))


