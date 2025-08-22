/*
Crear una función que reciba un array de objetos y devuelva el objeto con la edad más alta.
Crear una función que reciba un array y devuelva un nuevo array sin elementos duplicados.
Crear una funcion propia de range y sum.
Crear una función que reciba un array y devuelva el mismo array pero invertido (sin usar reverse).
Crear una función que reciba un array de strings y devuelva uno con todos los strings en mayúsculas.
Crear una función que reciba un array de números y devuelva la suma de los pares.
Crear una función que reciba un array de objetos y devuelva un array con solo los nombres que empiezan por una letra dada.
*/
const personas = [
  { nombre: "Isabel", genero: "femenino", edad: 34 },
  { nombre: "Ana", genero: "femenino", edad: 25 },
  { nombre: "Luis", genero: "masculino", edad: 30 },
  { nombre: "Pedro", genero: "masculino", edad: 20 },
  { nombre: "Sofia", genero: "femenino", edad: 22 },
  { nombre: "Carlos", genero: "masculino", edad: 28 },
  { nombre: "Marta", genero: "femenino", edad: 27 },
  { nombre: "Javier", genero: "masculino", edad: 35 },
  { nombre: "Lucía", genero: "femenino", edad: 19 },
  { nombre: "Miguel", genero: "masculino", edad: 24 },
  { nombre: "Elena", genero: "femenino", edad: 32 },
  { nombre: "Raúl", genero: "masculino", edad: 21 },
  { nombre: "Isabel", genero: "femenino", edad: 34 },
  { nombre: "Patricia", genero: "femenino", edad: 29 },
  { nombre: "Andrés", genero: "masculino", edad: 26 },
  { nombre: "Miguel", genero: "masculino", edad: 24 },
  { nombre: "Carmen", genero: "femenino", edad: 31 },
  { nombre: "Diego", genero: "masculino", edad: 23 },
  { nombre: "Isabel", genero: "femenino", edad: 34 },
  { nombre: "Fernando", genero: "masculino", edad: 28 },
  { nombre: "Laura", genero: "femenino", edad: 20 },
  { nombre: "Sergio", genero: "masculino", edad: 33 },
  { nombre: "Isabel", genero: "femenino", edad: 34 },
  { nombre: "Paula", genero: "femenino", edad: 18 }
];


//EJERCICIO 1
function edadMasAlta(array){
    let masAlta = array[0].edad
    // for (let persona of array){
    //     if(masAlta < persona.edad){
    //         masAlta = persona.edad
    //     }
    // }
    // Alternativamente, se puede usar reduce para encontrar la edad más alta
    masAlta = array.reduce((max, persona) => Math.max(max, persona.edad), array[0].edad);
    return array.find(persona => persona.edad === masAlta);
    // return masAlta
}
console.log(edadMasAlta(personas))

//EJERCICIO 2
// Crear una función que reciba un array y devuelva un nuevo array sin elementos duplicados.
function noDuplicados(array){
    let persona = array[0]
    console.log(personas.filter(p => p.nombre === persona.nombre && p.edad === persona.edad))
}
console.log(noDuplicados(personas))

//EJERCICIO 3
function range(inicio, final, pasos = 1){
  let array = []
  if(pasos === 0){
    throw new Error("La variable \"pasos\" no puede ser 0")
  }

  if(pasos <= 0){
    if(inicio < final) {
      throw new Error("La variable \"inicio\" debe ser menor que \"final\"")
    }
  let value = inicio
  while(value >= final){
    console.log(value)
    array.push(value)
    value +=pasos
  }

  }
  else{

  if(inicio > final){
    throw new Error("La variable \"inicio\" debe ser menor que \"final\"")
  }
  let value = inicio
  while(value <= final){
    console.log(value)
    array.push(value)
    value +=pasos
  }
  }

  return array
}
let rango = range(1, 11)
console.log(rango)

//EJERCICIO 4: Realizar una funcio que sume todos los numeros de un array

function sum(...numbers){
  return numbers.reduce((bandera, value)=> bandera =bandera + value, 0)
}

let sumaTotal = sum(1,2,3)
let sumaTotal2 = sum(...rango)
console.log(sumaTotal)
console.log(`Suma con rango: ${sumaTotal2}`)

//EJERCICIO 5

function reverseArray(array){
  let mitad = Math.floor(array.length/2)

  let copia = Array.from(array)
  console.log(copia[0])
  for (let i = 0; i < mitad;i++){
    let aux = copia[i]
    copia[i] = copia[copia.length - i -1]
    copia[copia.length - i -1] = aux
  }
  return copia
}
console.log(rango)
console.log(reverseArray(rango))

function reverseArrayInPlace(array){
  let mitad = Math.floor(array.length/2)

    for (let i = 0; i < mitad;i++){
    let aux = array[i]
    array[i] = array[array.length - i -1]
    array[array.length - i -1] = aux
  }
  return array
}
console.log(rango)
console.log(reverseArrayInPlace(rango))
console.log(rango)


