
//Forma de importar y exporta CommonJS
console.log("EStamos en el fichero de CommonJS")
import { suma, resta } from 'math';

export function realizarSuma (num1, num2){
    return suma(num1, num2);
}

import diasSemanas from "./ecma-script";
console.log(diasSemanas)