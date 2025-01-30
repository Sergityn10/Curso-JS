//EJERCICIO 1: CLASE VECTOR.
//Crear una clase llamada "VEC", la cual inicializa un array de 2 dimensiones. Por lo tanto, tendrá
//      1- Un constructor con x e y como parametros de entrada, que concuerdan con las longitudes de los arrays
//      2-Una función "más", que calcule la suma de todos los numeros del array.
//      3-Una función "menos", que calcule la diferencia de todos los numeros del array.
//      3-Un getter llamado length, que calcula la distancia entre x e y.
class VEC {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.array = new Array(x).fill(0).map(() => new Array(y).fill(0))
    }
    //Funcion que calcula la suma de todos los numeros del array.
    mas(vector = VEC) {
        let newX = this.x + vector.x
        let newY = this.y + vector.y

        return new VEC(newX,newY);
    }
    menos(vector) {
        let newX = this.x - vector.x
        let newY = this.y - vector.y

        return new VEC(newX,newY);
    }
    //Getter que calcula la distancia entre x e y.
    get length() {
        return this.x * this.y;
        }
}

const vector = new VEC(10,8)
const vector2 = new VEC(5,5)
console.log(vector.mas(vector2))
console.log(vector.menos(vector2))
console.log(vector.length)

//EJERCICIO 2: CONJUNTO
//Crear una clase "Conjunto" la cual tenga la misma funcionalidad de que la clase Set. Es decir, se debe implementar:
//      1-Un constructor que reciba un array de elementos.
//      2-Una función ADD, la cual añade un nuevo elemento, solamente si este no existe ya al conjunto.
//      3-Una función REMOVE, la cual elimina un elemento del conjunto.
//      4-Un método "esVacio", que devuelve true si el conjunto está vacío
//      5-Un método HAS, el cual devuelve true si su parametro de entrada forma parte del conjunto, y false en caso contrario
class Conjunto {
    constructor() {
        this.array = Array(0);
        Conjunto.prototype[Symbol.iterator] = function (){return new ConjuntoIterable(this)}
    }
    //Funcion que añade un nuevo elemento al conjunto.
    add(elemento) {
        if (!this.array.includes(elemento)) {
            this.array.push(elemento);
        }
    }
    //Funcion que elimina un elemento del conjunto.
    remove(elemento) {
        const index = this.array.indexOf(elemento);
        if (index > -1) {
            this.array.splice(index, 1);
        }
    }
    //Funcion que devuelve true si el conjunto esta vacio.
    isEmpty() {
        return this.array.length === 0;
    }
    //Funcion que devuelve true si el elemento esta en el conjunto.
    has(elemento) {
        return this.array.includes(elemento);
    }
}

//Crear un conjunto y agregar elementos
const conjunto = new Conjunto();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
//Verificar si el conjunto está vacío
console.log(conjunto.isEmpty());
//Verificar si el conjunto tiene un elemento
console.log(conjunto.has(1));
//Intentar añadir un nuevo elemento que ya existe en el conjunto.
conjunto.add(1);
console.log(conjunto)

//EJERCICIO 3: CONJUNTO ITERABLE
//Crear una clase "ConjuntoIterable" la cual tenga la misma funcionalidad de que
// la clase Set, pero con la diferencia de que esta clase debe ser iterable.
class ConjuntoIterable {
    constructor(conjunto=Conjunto) {
        this.x = 0
        this.conjunto = conjunto
        }
        //Funcion que devuelve el siguiente elemento del conjunto.
        next() {
            if (this.conjunto.isEmpty()) {
                return {value: undefined, done: true};
                }
            if(this.x === this.conjunto.array.length) {return { value: undefined , done : true}}
            const elemento = this.conjunto.array[this.x];
            this.x++;
            return { value: elemento, done: false };
        }
}

//Iteramos sobre el conjunto creado anteriormente en el ejercicio 2
for(let el of conjunto){
    console.log(`Elemento ${el} de la posición ${conjunto.x}`)
}

//EJERCICIO 4: TOMANDO PRESTADO UN MÉTODO
//El método "hasOwnProperty" se trata de un opción más viable cuando se quiere averiguar si un método o propiedad de un objeto existe en esa instancia
//pero queriendo dejar a un lado las propiedades del prototipo. ¿Se podría conseguir un modo de que si un Objeto ya tiene una propiedad "hasOwnProperty",
//poder llamar al método que ha heredado del prototipo?

class Property{
    constructor(){
        this.propiedad = "Propiedad"
        }
        hasOwnProperty(){
            console.log("Mi propio hasOwnProperty")
        }
}
let property = new Property()
property.hasOwnProperty
var number = new Map()
number.set("hasOwnProperty",8)
number.hasOwnProperty
console.log(number.hasOwnProperty("hasOwnProperty"))
console.log("hasOwnProperty" in number)