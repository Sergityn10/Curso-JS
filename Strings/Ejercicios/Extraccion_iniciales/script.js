
let formulario = Array.from(document.getElementsByTagName("form"))[0]
let spanResultado = document.getElementById("result")
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    let name = event.target.name.value
    
    spanResultado.innerText = UpperCasesNames(name)
})

function UpperCasesNames(name){
    let spaces = name.split(" ")
    let result = ""
    for (let names of spaces) {
        let letter = names.charAt(0)
        result = result + letter.toUpperCase()
    }
    return result
}

