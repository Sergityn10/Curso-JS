
//En esta sesión, se explicará de forma clara los OBJETOS en JavaScript y sobre POO (Programación Orientada a Objetos)
//Se explicará el concepto de clases y objetos, y se verá como se pueden crear 
//clases y objetos en JavaScript. Se verá como se pueden crear métodos y atributos.
//Qué tipos de objetos existen y cómo se pueden considerar cada tipo. 
//También se tocarán el tema de "interfaces", "prototipos" e instancias de Objetos y clases.

//Dentro de un objeto, podemos encontrar dos tipos de funciones o propiedades: privadas o públicas. 
//En JavaScript, no se puede especificar qué propiedades o funciones son privadas o públicas, pero los programadores
//utilizan el signo "_" al principio para referirse a una propiedad privada

//FORMAS DE CREAR UN OBJETO


let conejo = {}
conejo.nombre = "Bugs Bunny"
conejo.edad = 5
conejo.color = "blanco"
conejo._peso = 5.5
conejo._comer = function() {
    console.log("Comiendo lechuga")
    }
conejo._comer()
console.log(conejo)


class Conejo {
    constructor(nombre, edad, color, peso) {
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this._peso = peso
        }
        _comer(comida) {
            console.log(`Comiendo ${comida}`)
            }
}

let nuevoConejo = new Conejo("Bugs Bunny", 5, "blanco", 5.5)

console.log(nuevoConejo)
nuevoConejo._comer("Lechuga")


console.log("toString" in nuevoConejo)

//Aunque no tengamos ninguna propiedad ni función que se llame "toString", como deriva del prototipo Object, 
// todos los objetos creados heredan las funciones y propiedades de Object.
//Este problema se puede solucionar llamando a la función Object.create(null). Esto producirá que no herede ningún 
//prototipo

let objeto = Object.create(null)


console.log("toString" in objeto) //false
console.log(Object.getPrototypeOf(objeto))

objeto = {
    nombre: "Bugs Bunny",
    edad: 5,
}
console.log("SEPARACIÓN") //true
console.log("toString" in objeto) //true
console.log(Object.getPrototypeOf(objeto))

//MAPAS
//Los mapas son objetos que contienen pares clave-valor. Los mapas son muy
// útiles para almacenar datos que se relacionan entre sí. Por ejemplo, si
// queremos almacenar los nombres de los alumnos de una clase junto con sus
// edades, podemos usar un mapa. 
let edades = new Map()

//FUNCIONES BÁSICAS DEL OBJETO MAP
//SET
//Guarda dentro de la instancia, un nuevo clave-valor. Si se intenta guardar
//un nuevo clave-valor pero la clave ya existe, se actualiza el valor guardado.

edades.set("Bugs Bunny", 5)
edades.set("Tweety", 2)
console.log(edades)
edades.set("Bugs Bunny", 9)
//CLEAR
//Limpia la instancia, borrando todos los clave-valor guardados en él.
edades.clear()
console.log(edades)

edades.set("Bugs Bunny", 5)
edades.set("Tweety", 2)
//DELETE
//Elimina un elemento del mapa. Se debe especificar la key del par que se quiere eliminar
//DEVUELVE -> True si es eliminado con exito
//         -> False si no existe o ha habido un error al eliminar
edades.delete("Tweety")
console.log(`Eliminado un valor Tweety ${edades}`)
console.log(edades)

console.log(edades.keys)
//GET()
//Devuelve el valor asociado a la clave especificada. Si no existe la clave, devuelve
//undefined.
console.log("MÉTODO GET")
console.log(edades.get("Bugs Bunny")) //Devuelve el valor
console.log(edades.get("Hola")) //Devuelve undefined

//HAS()
//Devuelve true si el mapa contiene la clave especificada, false en caso contrario.
console.log("MÉTODO HAS")
console.log(edades.has("Bugs Bunny"))//true
console.log(edades.has("Hola"))//false



//A la hora de utilizar maps, hay que tener muy en cuenta la forma en la que se
//se asegurará de que exista alguna entidad o claves dentro de ella. La forma correcta
//es utilizando la función heredada del prototipo "Map" has(), que busca solamente
//las claves que tiene guardada dentro del objeto, y no como hace "in", que busca
//en todas las propiedades del objeto.
console.log(edades.has("toString"))

console.log("toString" in edades)
console.table(edades)

//HASOWNPROPERTY()
//Devuelve un booleano indicando si el objeto tiene una propiedad con el nombre
// especificado. La diferencia con "in" es que "hasOwnProperty" solo busca
// dentro de las propiedades del objeto, y no en las propiedades de sus
// prototipos.

console.log("DIFERENCIAS ENTRE IN E hasOwnProperty")

console.log(edades.hasOwnProperty("toString"))
console.log("toString" in edades)

//POLIMORFISMO
//
//Polimorfismo es la capacidad de un objeto de comportarse de manera diferente
//dependiendo de su contexto. En otras palabras, es la capacidad de un objeto
//de tener diferentes comportamientos en diferentes situaciones.
//En JavaScript, el polimorfismo se puede lograr mediante la herencia de clases.
//En este caso, la clase "Map" hereda de la clase "Object", y por
// lo tanto, tiene acceso a todas las propiedades y métodos de la clase "Object"
// y puede utilizarlos para realizar diferentes tareas.
//Por ejemplo, podemos utilizar el método "toString()" de la clase "Object"
// para convertir el objeto "Map" en una cadena de texto.
console.log(edades.toString())

//Cambiamos la funcionalidad del método toString
Map.prototype.toString = function (){
    return "Map: " + this.size
}

console.log(edades.toString()) //Observamos que su comporamtiento es diferente al heredado del prototipo Object

let array = [1,3,5,5]
console.log(array.toString())
console.log(array.toString)

Array.prototype.toString= function(){
    return this.join(" next ")
}
console.log(array.toString())
console.log(array.toString)

//SYMBOL
//Los símbolos son valores únicos e inmutables que se pueden utilizar como
// claves de objetos. Los símbolos son únicos en el sentido de que no
// pueden ser duplicados, y son inmutables en el sentido de que no pueden
// ser modificados una vez creados. Los símbolos se pueden utilizar para
// crear claves únicas para objetos, lo que puede ser útil para evitar
// colisiones de claves entre diferentes objetos.
//Los símbolos se pueden crear utilizando la función "Symbol()". Por ejemplo,
// podemos crear un símbolo utilizando la siguiente línea de código:
let sym = Symbol("key")
//El símbolo creado anteriormente se puede utilizar como clave de un objeto,
// como se muestra a continuación:
let obj = { [sym]: "value" }


console.log(obj[sym]) //Observamos que no se puede acceder a la propiedad por su
// nombre, sino que se debe utilizar el símbolo como clave.


//CLASS ITERATOR
//Los iteradores son objetos que permiten iterar sobre una colección de valores.
//En JavaScript, los iteradores se pueden crear utilizando la clase "Iterator".
//La clase "Iterator" proporciona un método "next()" que devuelve el siguiente
// valor de la colección, y un método "return()" que devuelve el valor de retorno
// de la iteración. 
//IMPORTANTE: Tener en cuenta que solamente Symbol.iterator se trata de un símbolo real.
//Es por eso que para acceder al constructor del iterator, se debe buscar como 
//un símbolo, como se muestra en el código anterior
let ok = "OK"
let okIterator = ok[Symbol.iterator]();

//NEXT()
//El método "next()" devuelve el siguiente valor de la colección. Devuelve un objeto 
// con dos propiedades: "value" y "done". La propiedad "value" contiene el
// siguiente valor de la colección, y la propiedad "done" indica si se ha llegado
// al final de la colección. 

console.log(okIterator.next()) //Observamos que el método next devuelve un objeto con dos propiedades
console.log(okIterator.next()) //Observamos que el método next devuelve un objeto con dos propiedades
console.log(okIterator.next()) //Observamos que el método next devuelve un objeto con dos propiedades
console.log(okIterator)

//La forma anterior se puede realizar de la misma manera que con un "for ... of ... "
//solamente, que en la forma del for no podemos acceder al valor de "done"
function main(){

for (let i of ok) {
    console.log(i)
    }
}
main()


//A la hora de crear cualquier clase que queramos iterar, será necesario siempre implmentar al menos, 
// 2 clases.
// 1. La clase que queremos iterar
// 2. La clase que implementa el iterador


//-----EJERCICIO MATRIZ CON ITERADOR ---------
//En este apartado, se implementará una matriz que representa una matriz de n x m.
//Siendo n las filas y m las columnas.
//Crear un iterador que permita recorrer la matriz y mostrar los valores de cada fila



class Matriz {
    
    constructor(filas, columnas, elemento = (x,y)=> undefined) {
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = [];
        for (let i = 0; i < filas; i++) {
            this.matriz[i] = [];
            for (let j = 0; j < columnas; j++) {
                this.matriz[i][j] = elemento(i,j)
            }
        }
        Matriz.prototype[Symbol.iterator] = function(){
            return new IteradorMatriz(this);
        }
    }
       
    //Metodo que permite crear la matriz
    crearMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 10);
                }
                }
                return this.matriz;
                }
}
let matriz=[]
let matriz2 = new Matriz(3, 3);
console.log(matriz)
console.log(matriz2)
console.table(matriz2.crearMatriz())

//La clase que implementa el iterador
class IteradorMatriz {
    constructor(matriz) {
        this.matriz = matriz;
        this.filas = matriz.filas;
        this.columnas = matriz.columnas;
        this.contador = 0;
    }
    next() {
        if (this.contador < this.filas) {
            let fila = this.matriz[this.contador];
            this.contador++;
            return {value: fila, done: false};
        } else {
            return {value: undefined, done: true};
        }
    }
}
//Normalmente, este trozo de código se suele incrustar dentro del constructor para 
//no andar estableciendo cada vez el iterator.

Matriz.prototype[Symbol.iterator] = function (){
    return new IteradorMatriz(this);
}
function itMatriz(){
    let newMatriz = new Matriz(3,3,(x,y)=>`valor ${x} ${y}`)
    for (let valor of newMatriz){
    console.log(valor)
}
}

itMatriz()
















