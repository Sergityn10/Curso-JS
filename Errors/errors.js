//Los errores en programación son considerados "bugs" y la práctica para intentar encontrar los bugs de nuestro código se denomina "depuración"
//DEBUGGER
//El debugger es una herramienta que nos permite detener la ejecución de nuestro código en un
//punto específico, para poder analizar las variables y el flujo de ejecución.
//Para utilizar el debugger, debemos agregar un breakpoint en el código, que es un punto donde
//queremos que se detenga la ejecución del código.
//Para agregar un breakpoint, podemos hacer clic en la línea de código donde queremos que se det
//enga la ejecución, y luego hacer clic en el botón "Pausar" en
//el panel de depuración.
//Para analizar las variables, podemos hacer clic en la variable en el panel de depuración
//y luego hacer clic en el botón "Evaluar" para ver su valor actual.
//Para continuar la ejecución del código, podemos hacer clic en el botón "Continuar"

//EJEMPLO DEBUGGER
// let x = 5;
// debugger;
// console.log(x); // No se ejecutará porque el debugger se detiene en la línea
// let y = 10;


//Otra manera para conocer que se ha producido un error es mediante objetos, o valores especiales. Es el caso en el que se comporta el meotodo "next" de los iteradores
function lastElement(array){
    if(array.lenght === 0){
        return {fail : true}
    }
    else{
        return {valor : array[array.length - 1]}
    }
}

// EXCEPCIONES
//La manera mas sencilla y facil de ejecutar es mediante la captura de excepciones. Esto nos permite conocer sobre que funciones se han producido los errores, donde nuestro 
//sistema recorrera toda la pila de funciones llamadas e ir "desenrrollando la pila". 
//Las excepciones las podemos capturar, envolviendo a la funci'on que puede producir algun fallo, mediante un try/catch. Para que esto funciones, la funcion o funciones que se 
//estan envolviendo deben de lanzar algun error para que se capture el error.

//EJEMPLO
function promptDirection(question){
    let result = prompt(question)
    if(result.toLowerCase() == "left"){
        return "L"
    }
    if(result.toLowerCase() == "right"){
        return "R"
    }
    throw new Error(`Dirección inválida: ${result}`)
}
function look(){
    if(promptDirection("¿Hacia dónde?") == "L"){
        return "Una casa"
    }
    else{
        return "Dos osos"
    }
}

try{
    console.log(`Ves ${look()}`)
}
catch(error){
    console.error(error)
}

//LIMPIANDO DESPUES DE EXCEPCIONES
//En una funcion o captura de excepciones, se puede establecer una clausula "finally" que suceda lo que suceda, siempre se va a ejecutar.

//CAPTURA SELECTIVA
//cuando se entra en un cuerpo catch, todo lo que sabemos es que algo en nuestro cuerpo "try" causo la excepcion pero no sabes el que ni el cuando.

