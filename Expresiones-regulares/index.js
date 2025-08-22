
//MÉTODO REPLACE
let textoConNombres = "Martin, Sergio\n Verdecia, Javier\n Vaquerizo, Cristina"
let expNombres = /(\w+), (\w+)/g
console.log(textoConNombres.replace(expNombres,"$2 $1"))

//Ejemplo realizando llamadas con replace por cada coincidencia.

function textoToUpperCase(){
    let polis = "la cia y el fbi"
    let exp = /\b(cia|fbi)\b/g
    console.log(polis.replace(exp,match=>match.toUpperCase()))
}
textoToUpperCase()

//y otro más interesante

let almacen="1 limon, 2 lechugas y 101 huevos"

function menosUno(coincidencia,cantidad, unidad) {
    cantidad = Number(cantidad)-1 //pasamos la cantidad, que viene como un String, a un número
    if(cantidad == 1)//solo queda uno, convertirlo a singular. Es decir, quitamos la "s"
        unidad = unidad.slice(0, unidad.length -1)
    else if(cantidad == 0)
        cantidad = "sin"

    return cantidad + " " + unidad
    
}
console.log(almacen.replace(/(\d+) (\w+)/g, menosUno))

//MÉTODO SEARCH
//busca la primera coincidencia y devuelve el índice de la primera letra de la
//coincidencia. Si no encuentra nada devuelve -1.

console.log("Probando el método search de la clase String")
let palabra = "     palabra"
console.log(palabra.search(/\w+/)) //busca la primera palabra y devuelve el índice
console.log(palabra.search(/\d+/))//devuelve -1 ya que no hay dígitos en la cadena de texto


//Propiedades de las expresiones regularesç
console.log("viendo las propiedades de las expresiones regulares")
// let expresion = /\b(\w)+\b/
let expresion = new RegExp("\\b(\w)+\\b","g") //El operador de límite de palabra, de esta forma es necesario poner dos barras invertidas, ya que se trata de un String

let nombre = /Sergio/ig
console.log(nombre.lastIndex) //Guarda la posición donde se encontró la última coincidencia de la expresión. Cuando se crea, su valor por defecto es 0.
nombre.exec("    HOla me llamo Sergio")
console.log(nombre.lastIndex) //Guarda la posición donde se encontró la última coincidencia de la expresión. Cuando se crea, su valor por defecto es 0.
console.log(expresion.source) //Se trata del string con el que se creó la expresión.
console.log(nombre.flags)

//Ciclos sobre coincidencias
console.log("Ciclos sobre coincidencias")
let texto = "Un string con 3 números en el ... 77 y 23"
let numero = /\b\d+\b/g
console.log(numero.lastIndex)
console.log(numero.exec(texto)) //devuelve el primer número que encuentra
console.log(numero.lastIndex)
console.log(numero.exec(texto)) //devuelve el primer número que encuentra
console.log(numero.lastIndex)

//CARACTERES INTERNACIONALES
console.log("CARATERES INTERNACIONALES")
let rosa = "😍👩‍💻"
