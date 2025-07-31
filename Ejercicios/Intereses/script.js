const formulario = Array.from(document.getElementsByTagName("form"))[0]

//Obtenemos los botones de nuestro formulario

const inputInicio = document.getElementById("inicio")
const inputFinal = document.getElementById("final")
const inputTiempo = document.getElementById("time")
const inputIntereses = document.getElementById("interes")

formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(calculoTiempo(inputInicio.value, inputIntereses.value, inputFinal.value))

})

function calculoTiempo(inicio, intereses, final, tiempo){
    let veces = 0
    let bandera = inicio
    if(inicio > final){
        return new Error("El dinero inicial debe ser mayor que el final")
    }
    while (bandera < final){
        bandera = bandera * intereses + bandera
        veces++
    }
    return {
        iteraciones : veces
    }


    
}