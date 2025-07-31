
function promptNumber(pregunta){
    let number = Number(prompt(pregunta))
    console.log(number)
    if(Number.isNaN(number)){
        throw new Error("El valor dado debe ser un numero")
    }
        return number

}

function callPrompt(pregunta){
    try {
        promptNumber(pregunta)
    } catch (error) {
        console.log(error)

    }
}

callPrompt("Pon un numero")