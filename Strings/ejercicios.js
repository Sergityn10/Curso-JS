/*EJERCICIO 1: Dado un string por el usuario, buscar que se cumpla una expresión regular */

function matchString(...expresion_reg){

    let comando = prompt("Escribe tu usuario");
    expresion_reg.forEach(expr => { 
    if(comando.match(expr)){
                console.log(`La cadena ${comando} cumple con la expresion regular ${expr}`);
            }else{
                console.log(`La cadena ${comando} no cumple con la expresion regular ${expr}`);
            }

    })
    
    /*let varMatch = comando.match(/[0-9]+/)
    if(varMatch != null){
        console.log(`La cadena ${comando} contiene numeros`)
    }else{
        console.log(`La cadena ${comando} no contiene numeros`);
    }*/

}

matchString("[0-9]+","[a-zA-Z]+");
matchString("0")

/* EJERCICIO 2: Dado un string por el usuario, obligar al usuario que cumpla con unos requisitos y que por cada condicion, mostrar cuales se cumplen */

// ESTO ES UN EJEMPLO DE COMO SE DEBE ESCRIBIR UNA EXPRESIÓN REGULAR -> /^*[a-zA-Z0-9_-]*@[a-zA-Z0-9_-]*\.[a-zA-Z0-9_-]*$/

/*EJERCICIO 3: DAdo un string por usuario,  */