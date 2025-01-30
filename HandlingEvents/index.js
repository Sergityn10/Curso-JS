
//Función para conocer que tipo de pulsacion se ha hecho con el ratón.
let button = document.querySelector("button")
function conocerClickMouse(evento){
    if (evento.button == 0) {
            console.log("Click izquierdo");
        } else if( evento.button == 1){
            console.log("Botón central");
        } else if( evento.button == 2){
            console.log("Click derecho");
        }
}
    button.addEventListener("mousedown", conocerClickMouse)

