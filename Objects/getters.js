
//FUNCIONES GETTERS
//Las propiedades de los objetos pueden tener escondidos métodos que se llaman 
//cuando se acceden a ellas. Estos son las funciones "getters".
//Los getters son funciones que se ejecutan cuando se accede a una propiedad de un objeto.
//Se crean añaidiendo la palabra clave "get" delante del nombre de la propiedad
//que queremos que se comporte como tal. Al final, se está comportando como una función,
//pero se accede a ella como si fuera una propiedad del objeto.
//Los getters son muy útiles para ocultar la complejidad de un objeto a los
//usuarios finales de la aplicación. Por ejemplo, si queremos que un objeto
//tenga una propiedad que se actualice automáticamente cuando se modifique otra propiedad

let Saludo = {
    nombre: "Juan",
    get saludar (){
        return "Hola, mi nombre es " + this.nombre;
    }
}
console.log(Saludo.saludar); //HOLA, MI NOMBRE ES JUAN

let tamanoCambiante = {
    get tamaño (){
        return Math.floor(Math.random() * 100)
    }
}

console.log(tamanoCambiante.tamaño)
console.log(tamanoCambiante.tamaño)

//FUNCIONES SETTERS
//Los setters son funciones que se ejecutan cuando se asigna un valor a una propiedad de un
//objeto. Se crean añadiendo la palabra clave "set" delante del nombre
//de la propiedad que queremos que se comporte como tal. Al final, se está comport
//ando como una función, pero se accede a ella como si fuera una propiedad del objeto.
//Los setters son muy útiles para ocultar la complejidad de un objeto a los
//usuarios finales de la aplicación. 


console.log("APARTADO DE LOS SETTER")
class Temperatura {
    constructor (celsius) {
        this.celsius = celsius;
        }
        get fahrenheit (){
            return this.celsius * 9/5 + 32;
            }
            set fahrenheit (fahrenheit) {
                this.celsius = (fahrenheit - 32) * 5/9;
                }
        static desdeFahrenheit(valor){
            return new Temperatura((valor - 32) * 5/9);
        }
}


