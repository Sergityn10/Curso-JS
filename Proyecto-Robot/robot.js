
export const caminos = [ "Casa de Alice-Casa de Bob",
" Casa de Alice-Cabaña", 
"Casa de Alice-Oficina de Correos",
" Casa de Bob-Ayuntamiento", 
"Casa de Daria-Casa de Ernie",
" Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete",
    " Casa de Grete-Granja", 
    "Casa de Grete-Tienda",
    " Plaza de Mercado-Granja",
    "Plaza de Mercado-Oficina de Correos",
    " Plaza de Mercado-Tienda",
    "Plaza de Mercado-Ayuntamiento",
    " Tienda-Ayuntamiento" ];

export class Grafo{
    
    constructor(arrayCaminos){
        this.grafo = Object.create(null);
        for(let [desde, hasta] of arrayCaminos.map(c => c.trim().split("-"))){
            this.agregarNodo(desde, hasta)
            this.agregarNodo(hasta, desde)
        }
    }
    agregarNodo(desde, hasta){
        if (!this.grafo[desde]) {
            this.grafo[desde] = [hasta]
        }
        else{
            this.grafo[desde].push(hasta)
        }

        
    }
}

const ciudad = new Grafo(caminos)
console.log(ciudad.grafo)

console.log(ciudad)

export class EstadoPueblo{
    constructor (lugar, paquetes, caminos = Grafo){
        this.lugar = lugar
        this.paquetes = paquetes
        this.caminos = caminos
    }
    mover(destino){
        if(!this.caminos.grafo[this.lugar].includes(destino)){
            return this
        }
        else{
            let paquetes = this.paquetes.map( p =>{
                if(p.lugar != this.lugar) return p
                else return {lugar: destino, direccion: p.direccion}
            }).filter(p => p.lugar !== p.direccion)
            return new EstadoPueblo(destino, paquetes,this.caminos)
        }
    }
    aleatorio(numeroDePaquetes = 5){
        let paquetes = []
        for(let i = 0; i < numeroDePaquetes; i++){
            let direccion = eleccionAleatoria(Object.keys(this.caminos.grafo))
            let lugar;
            do {
                lugar = eleccionAleatoria(Object.keys(this.caminos.grafo))
            } while (lugar === direccion);
            paquetes.push({lugar, direccion})
        }
        return new EstadoPueblo("Oficina de Correos", paquetes,this.caminos)
    }
}

const primero = new EstadoPueblo("Casa de Alice",[{lugar:"Casa de Alice",direccion:"Cabaña"}],ciudad)

console.log(primero)

console.log(primero.mover("Cabaña"))

class Robot{
    constructor(algoritmo,memoria, estado){
        this.algoritmo = algoritmo
        this.memoria = memoria
        this.estado = estado
    }

}


//Una vez creado los estados del pueblo, es necesario implementar las funcionalidades de moverse el robot, 
//el cual deberá guarda los movimimientos realizados con anterioridad (memoria)

function correrRobot (estado, robot, memoria = []){
    for(let turno =0;;turno++){
        if(estado.paquetes.length === 0){

        console.log(`Listo en ${turno} turnos`);
        break;
        }
    let acción = robot(estado, memoria)
    estado = estado.mover(acción.direccion);
    memoria =acción.memoria;
    console.log(`Moverse a ${acción.direccion}`);
    }
}

function eleccionAleatoria (array){
    return array[Math.floor(Math.random()*array.length)]
}
function robotAleatorio(estado){
    return {direccion: eleccionAleatoria(estado.caminos.grafo[estado.lugar])}
}


// EstadoPueblo.aleatorio = function(numeroDePaquetes = 5){ //Función para crear un EstadoPueblo con paquetes para repartir
//         let paquetes = []
//         for(let i = 0; i < numeroDePaquetes; i++){
//             let direccion = eleccionAleatoria(Object.keys(ciudad.grafo))
            
//             let lugar;
//             do {
//                 lugar = eleccionAleatoria(Object.keys(ciudad.grafo))
//             } while (lugar === direccion); //condición para asegurarse que el paquete no se encuentra ya en el destino
//             paquetes.push({lugar, direccion})
//         }
//         return new EstadoPueblo("Oficina de Correos", paquetes,ciudad)
//     }
//correrRobot(EstadoPueblo.aleatorio(),robotAleatorio)

const estado2 = new EstadoPueblo("Oficina de Correos",[],ciudad)
correrRobot(estado2.aleatorio(),robotAleatorio)

//La función que hemos implementado no se asemeja al comportamiento de una ruta de correos de la vida real, ya que 
//intentan realizar la ruta más eficiente, con la cual tengan que hacer el menor recorrido posible.
//A partir de aquí, nos encontramos con un PROBLEMA TÍPICO de grafos: encontrar recorridos más cortos 
//Para resolver este problema, podemos utilizar algoritmos como el de Dijkstra o el de 
//A* (A estrella), los cuales nos permiten encontrar el camino más corto entre
//dos puntos en un grafo. En este caso, el grafo es el mapa de la
//ciudad y los puntos son la oficina de correos y los lugares donde se encuentran

function encontrarRuta(grafo, desde, hasta){
    let trabajo = [{donde:desde, ruta : []}]
    for (let index = 0; index < trabajo.length; index++) {
        let {donde, ruta} = trabajo[index]
        for(let lugar of grafo[donde]){
            if(lugar == hasta) return ruta.concat(lugar)
            if(!trabajo.some(w => w.donde == lugar)){
                trabajo.push({donde:lugar, ruta: ruta.concat(lugar)})
            }
        }
        
    }
}

function robotOrientadoAMetas(estadoPueblo, ruta = []){
    if(ruta.length == 0){
        let paquete = estadoPueblo.paquetes[0]
        if(paquete.lugar != estadoPueblo.lugar){
            ruta = encontrarRuta(estadoPueblo.caminos.grafo, estadoPueblo.lugar, paquete.lugar)
        }else{
            ruta = encontrarRuta(estadoPueblo.caminos.grafo, estadoPueblo.lugar,paquete.direccion)
        }
    }
    return {direccion: ruta[0], memoria: ruta.slice(1)}
}




console.log("NUEVO ALGORITMO ROBOT ORIENTADO A METAS")
correrRobot(estado2.aleatorio(),robotOrientadoAMetas)