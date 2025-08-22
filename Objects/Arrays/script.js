// 1. Creación de un array vacío
let miListaDeCompras = [];

// 2. Creación de un array con elementos iniciales
let coloresPrimarios = ["rojo", "azul", "amarillo"];

let listaConObjetos = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];

// 3. Acceder a elementos por su índice
console.log(coloresPrimarios[0]); // Salida: "rojo" (el primer elemento)
console.log(coloresPrimarios[2]); // Salida: "amarillo"

// 4. Obtener la longitud (cuántos elementos hay)
console.log(coloresPrimarios.length); // Salida: 3

// 5. Modificar un elemento existente
coloresPrimarios[1] = "verde";
console.log(coloresPrimarios); // Salida: ["rojo", "verde", "amarillo"]

// 6. Añadir un elemento al final (simplemente asignando a la siguiente posición disponible)
coloresPrimarios[3] = "naranja";
console.log(coloresPrimarios); // Salida: ["rojo", "verde", "amarillo", "naranja"]

// 7. Arrays con tipos de datos mezclados (¡es posible, pero úsalo con criterio!)
let arrayMixto = [1, "hola", true, { nombre: "Ana" }, [10, 20]];
console.log(arrayMixto[3].nombre); // Salida: "Ana"

// 8. Métodos útiles para arrays
// Añadir un elemento al final del array
coloresPrimarios.push("morado");
console.log(coloresPrimarios); // Salida: ["rojo", "verde", "amarillo", "naranja", "morado"]
// Eliminar el último elemento del array
coloresPrimarios.pop();
console.log(coloresPrimarios)

//Añadir un elemento al principio del array
coloresPrimarios.unshift("blanco");
console.log(coloresPrimarios); // Salida: ["blanco", "rojo", "verde", "amarillo", "naranja"]

// Eliminar el primer elemento del array
coloresPrimarios.shift();

//Conseguir un elemento en un posicion del array
let elementoEnPosicion = coloresPrimarios[2];
let elemento2 = coloresPrimarios.at(2);
console.log(elementoEnPosicion); // Salida: "amarillo"

// Encontrar el índice de un elemento
let indiceRojo = coloresPrimarios.indexOf("rojo");
console.log(indiceRojo); // Salida: 1
//Generar un subarray mediante el array ya creado
let coloresSlice = coloresPrimarios.slice(1, 3);
console.log(coloresSlice); // Salida: ["verde", "amarillo"]
let array1= ["marron", "gris"]

// Unir dos arrays o mas 
let coloresConcat = coloresPrimarios.concat(array1)
console.log(coloresConcat)

// Revertir el orden de los elementos del array
coloresPrimarios.reverse();
console.log(coloresPrimarios); // Salida: ["naranja", "amarillo", "verde", "rojo", "blanco"]

// Ordenar los elementos del array (alfabéticamente). 
coloresPrimarios.sort();
console.log(coloresPrimarios); // Salida: ["amarillo", "blanco", "naranja", "rojo", "verde"]


//--------------------------FORMAS DE ITERAR UN ARRAY--------------------------
console.warn("Iterando un array:");
// 9. Iterar sobre un array con un bucle for
for (let i = 0; i < coloresPrimarios.length; i++) {
    console.log(`Color en el índice ${i}: ${coloresPrimarios[i]}`);
}
for (let color of coloresPrimarios) {
    console.log(`Color: ${color}`);
}
// Iterar sobre un array con forEach
coloresPrimarios.forEach((color, index) => {
    console.log(`Color en el índice ${index}: ${color}`);
});
listaConObjetos.map(obj => {
    console.log(`Nombre: ${obj.nombre}, Edad: ${obj.edad}`);
});


// Copiar parte del array dentro del mismo array
console.log(coloresPrimarios); // Salida: ["amarillo", "blanco", "naranja", "rojo", "verde"]
coloresPrimarios.copyWithin(1, 3);
console.log(coloresPrimarios); // Salida: ["amarillo", "verde", "verde", "rojo", "blanco"]

// Comprobar si un elemento existe en el array
let existeRojo = coloresPrimarios.includes("rojo");
console.log(existeRojo); // Salida: true


// Comprobar si un elemento existe en el array con un valor no primitivo
let existeObjeto = listaConObjetos.includes({ nombre: "Ana", edad: 25 });
console.log(existeObjeto); // Salida: false (porque es una referencia diferente)

// Encontrar un objeto en un array de objetos
let encontrado = listaConObjetos.find(obj => obj.nombre === "Ana");
console.log(encontrado); // Salida: { nombre: "Ana", edad: 25 }

// Encontrar el índice de un objeto en un array de objetos. La diferencia con indexOf es que esta es posible realizarla con objetos de Js.
// Con indexOf, unicamente funciona con valores primitivos como strings o numeros, pq busca una comparacion estricta 
let indiceEncontrado = listaConObjetos.findIndex(obj => obj.nombre === "Luis");
console.log(indiceEncontrado); // Salida: 1 (el índice del objeto con nombre "Luis")

// Filtrar un array de objetos
let mayoresDe25 = listaConObjetos.filter(obj => obj.edad >= 25);
console.log(mayoresDe25); // Salida: [{ nombre: "Luis", edad: 30 },{ nombre: "Ana", edad: 25 }]

// Transformar un array de objetos a un array de valores específicos
let nombres = listaConObjetos.map(obj => obj.nombre);
console.log(nombres); // Salida: ["Ana", "Luis", "Pedro"]

// Reducir un array a un único valor (suma de edades, por ejemplo)
let sumaEdades = listaConObjetos.reduce((acumulador, obj) => acumulador + obj.edad, 0);
console.log(sumaEdades); // Salida: 75 (25 + 30 + 20)

// Comprobar si todos los elementos cumplen una condición
let todosMayoresDe18 = listaConObjetos.every(obj => obj.edad > 18);
console.log(todosMayoresDe18); // Salida: true (todos tienen edad mayor a 18)
// Comprobar si al menos un elemento cumple una condición
let alMenosUnoMayorDe30 = listaConObjetos.some(obj => obj.edad > 30);
console.log(alMenosUnoMayorDe30); // Salida: false (ninguno es mayor de 30)

// Encontrar el primer elemento que cumple una condición
let primerMayorDe20 = listaConObjetos.find(obj => obj.edad > 20);
console.log(primerMayorDe20); // Salida: { nombre: "Ana", edad: 25 } (el primer objeto con edad mayor a 20)

// Encontrar el índice del primer elemento que cumple una condición
let indicePrimerMayorDe20 = listaConObjetos.findIndex(obj => obj.edad > 20);

console.log(indicePrimerMayorDe20); // Salida: 0 (el índice del primer objeto con edad mayor a 20)

// Comprobar si un array está vacío
let estaVacio = miListaDeCompras.length === 0;
console.log(estaVacio); // Salida: true (miListaDeCompras está vacío)

// 10. Iterar sobre un array con un iterador
let iterador = listaConObjetos.entries()
console.log(iterador)
// El método entries() devuelve un iterador que contiene pares clave/valor para cada índice y elemento del array
console.log(iterador.next().value); // Salida: [0, { nombre: "Ana", edad: 25 }]
console.log(iterador.next().value); // Salida: [1, { nombre: "Luis", edad: 30 }]
console.log(iterador.next().value); // Salida: [2, { nombre: "Pedro", edad: 20 }]

// Iterar sobre un array con un iterador
for (let [indice, objeto] of iterador) {
    console.log(`Índice: ${indice}, Objeto: ${JSON.stringify(objeto)}`);
}

// 11. Iterar sobre un array con un generador
function* generadorDeObjetos(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}
let generador = generadorDeObjetos(listaConObjetos);
console.log(generador.next().value); // Salida: { nombre: "Ana", edad: 25 }
console.log(generador.next().value); // Salida: { nombre: "Luis", edad: 30 }
console.log(generador.next().value); // Salida: { nombre: "Pedro", edad: 20 }

//Rellenar un array con un valor específico. Si tienes un array de objetos, tambien se pueden rellenar con objetos.
let listaDeNumeros = Array(10).fill(1); // Crea un array de 10 elementos, todos con el valor 1
console.log(listaDeNumeros); // Salida: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

listaDeNumeros.fill(2, 2, 5); // Rellena desde el índice 2 hasta el 5 (sin incluirlo) con el valor 2
console.log(listaDeNumeros)

let copiaListaObjetos = new Array(...listaConObjetos); // Crea una copia superficial del array de objetos

copiaListaObjetos.fill({ nombre: "Nuevo", edad: 0 }); // Rellena todo el array con un nuevo objeto
console.log(copiaListaObjetos); // Salida: [{ nombre: "Nuevo", edad: 0 }, { nombre: "Nuevo", edad: 0 }, { nombre: "Nuevo", edad: 0 }]

// Crea un subarray desde el índice 1 hasta el 2 (sin incluirlo)
listaConObjetos.slice(1, 2); 
console.log(listaConObjetos.slice(1, 2)); // Salida: [{ nombre: "Luis", edad: 30 }]

// Crea un subarray desde el índice 1 hasta el final
console.log(listaConObjetos.slice(1)); // Salida: [{ nombre: "Luis", edad: 30 }, { nombre: "Pedro", edad: 20 }]

// Aplana el array de objetos (en este caso no tiene efecto porque no hay arrays anidados)
let arrayConProfundidad = [[1, 2], [3, 4], [5, 6], [7, 8, [9,10]]];
console.log("Aplanando el array con profundidad:");
console.log(arrayConProfundidad); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, [9,10]]
console.log(arrayConProfundidad.flat()); // Salida: [1, 2,
console.log(arrayConProfundidad.flat(2)); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

// Aplana el array de objetos a un array de valores
let arrayDeValores = listaConObjetos.flatMap(obj => [obj.nombre, obj.edad]);
console.log(arrayDeValores); // Salida: ["Ana", 25, "Luis", 30, "Pedro", 20]

// Aplana el array de objetos a un array de nombres
let arrayDeNombres = listaConObjetos.flatMap(obj => obj.nombre);
console.log(arrayDeNombres); // Salida: ["Ana", "Luis", "Pedro"]


listaConObjetos.splice(1, 1); // Elimina el objeto en el índice 1 (el objeto con nombre "Luis")
console.log(listaConObjetos); // Salida: [{ nombre: "Ana", edad: 25 }, { nombre: "Pedro", edad: 20 }]
// Añade un nuevo objeto en el índice 1
listaConObjetos.splice(1, 0, { nombre: "Nuevo", edad: 0 });
console.log(listaConObjetos)

// Eliminar mas de 2 elementos y añadir uno nuevo
listaConObjetos.splice(0, 2, { nombre: "Sofia", edad: 22 }, { nombre: "Carlos", edad: 28 },{nombre: "Sergio", edad:23});
console.log(listaConObjetos); // Salida: [{ nombre: "Sofia", edad: 22 }, { nombre: "Carlos", edad: 28 }, { nombre: "Pedro", edad: 20 }]

// Une los nombres de los objetos en un string
// Convierte un array de caracteres en un string
console.log(listaConObjetos.flatMap(obj => obj.nombre).join(" - ")); // Salida: "Sofia - Carlos - Pedro"
console.log(listaDeNumeros.join(", ")); // Salida: "2, 2, 1, 1, 1, 1, 1, 1, 1, 1"


// Convierte un string en un array de caracteres
let string = "Hola Mundo";
let arrayDeCaracteres = string.split("");
console.log(arrayDeCaracteres); // Salida: ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"]
// Convierte un string en un array de palabras
let arrayDePalabras = string.split(" ");
console.log(arrayDePalabras); // Salida: ["Hola", "Mundo"]
