
let buttonValidar = document.getElementById("valButton")
let input = document.getElementById("correo")
let divErrores = document.createElement("div")

const body = document.body
body.appendChild(divErrores)
buttonValidar.addEventListener("click" ,(event)=>{
    let listErrors = validationCorreo(input.value)
    console.log(listErrors)
    if(listErrors.length === 0){
        let parrafo = document.createElement("p")
        parrafo.innerText = "Correo valido"
        divErrores.append(parrafo)
    }
})

/*Validación de Formato de Correo Electrónico Básico:

Conceptos: length, includes(), indexOf(), lastIndexOf().

Descripción: Pídele al usuario que introduzca una dirección de correo electrónico. Verifica si la dirección contiene un @ y al menos un . después del @. Asegúrate de que el @ no sea el primer o el último carácter y que el . no sea el último carácter.

Salida Esperada: "Correo electrónico válido" o "Correo electrónico inválido".

Mundo Real: Esto es un paso básico en la validación de formularios de registro o inicio de sesión.
*/

function validationCorreo(correo){
    let listErrors = []
    let position_arroba = correo.indexOf("@")
    if(!position_arroba){

        listErrors.push("Debe de contener @")
        return listErrors
    }
    if(position_arroba === 0 || position_arroba === correo.length-1){
        listErrors.push("El @ no puede ir en primer lugar ni en ultimo lugar")
    }
    let position_point = correo.lastIndexOf(".")
    if(!position_point){
        listErrors.push("El correo debe contener un punto despues de @")
    }
    if(position_arroba > position_point){
        listErrors.push("El punto debe ir despues del arroba")
    }


    return listErrors
    
}

