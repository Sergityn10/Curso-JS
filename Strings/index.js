//Propiedades y funciones de los strings
var  miString = "Hola Mundo";
console.log(miString);

miString.length;//Devuelve la longitud del string
console.log("Longitud: "+miString.length);


miString.toUpperCase();//Convierte el string a mayusculas
console.log("Mayuscula: "+miString.toUpperCase());

miString.toLowerCase();//Convierte el string a minusculas
console.log("Minuscula: "+miString.toLowerCase())

/*
Substring, devuelve un substring de una cadena
El primer parametro es donde comienza el substring
El segundo parametro (opcional) es cuantos caracteres va a tener el substring
Si no se le pasa el segundo parametro, se toma por defecto el final del string
*/
console.log("substring desde la posición 2: "+miString.substring(2));
console.log("substring desde la posición 2: "+miString.slice(2));
console.log("substring con dos parametros de las posiciones 1 y 4: "+miString.substring(1,4));

/*charAt (Toma 1 argumento)
    1- La posicion del string a la que se quiere acceder
    
    Devuelve  el carácter en esa posición. Tener en cuenta que los arrays empiezan por 0, no por 1, por lo que la primera posicion 
    del string es el 0.
    Tambien, para acceder al caracter en una posición concreta, podemos utilizar tambien la sintaxis de un array en []*/
console.log(`Caracter en la posicion 3 utilizando ChartAt:${miString.charAt(3)} `)//devuelve el carácter en la posición dada por el parámetro
console.log(`Caracter en la posicion 3 utilizando sintaxis de array: ${miString[3]}`);



/*SLICE
    Retorna un array con los elementos entre el inicio y final indicados
    El ultimo parametro (opcional) indica paso, que son los espacios entre cada elemento.
    Se trata de una función muy parecida a substring
    Si no se le pasa el segundo parametro, se toma por defecto el final del string

 */

console.log("substring desde la posición 2: "+miString.slice(2));
console.log("con pase: "+miString.slice(0,5,2))

/* SPLIT

Split divide un string en varios segun un separador
En este caso separamos por espacio
*/
var frase="Esto es una frase";
frase=frase.split(" ");
console.log(`Separamaos una frase en un array por espacios: ${frase}`);


/*
IndexOf busca si hay alguna ocurrencia de un valor en el string
Devuelve la posicion donde se encuentra o -1 si no lo encuentra.  Si existe más de una ocurrencia, se quedará con la primera que encuentre.
Este metodo puede buscar caracteres con más de un caracter dentro del string
*/

console.log("Posicion de o: "+miString.indexOf('o'));
console.log(`Posición de Mundo: ${miString.indexOf('Mundo')}`);
console.log(`Posición de patata: ${miString.indexOf('patata')}`); //devuelve -1 porque no se encuentra dentro del string

/*
LastIndexOf busca la ultima ocurrencia de un valor en el string
Funciona igual que IndexOf pero busca  desde el final hacia atras. Si existe más de una ocurrencia, se quedará con la primera que encuentre.
*/
console.log("Ultima Posicion de o: "+miString.lastIndexOf('o'));


/* JOIN (Toma 2 argumentos de entrada)
    1-Separador que se va a utilizar para unir los elementos del array
    2-Array que se va a unir
    Devuelve un string con todos los elementos del array separados por el separador que se le haya pasado
    
Join une todos los elementos de un array en un solo string separado por un separador
*/
let fraseUnida = frase.join("-");
console.log(fraseUnida); //Volvemos a unir en un mismo string la frase anteriormente separada uitlizando la función split


/* trim, trimEnd, trimStart
    Devuelve el mismo string pero eliminando todos los espacios en blanco y los saltos de línea, tabulaciones. En general, todos los conceptos que se r
    refieran a espacios en blanco. SOLAMENTE ELIMINA LOS QUE SE ENCUENTRAN AL PRINCIPIO O AL FINAL
*/

console.log(`Frase sin espacios al principio ni al final: \n ${miString.trim()}`);

/* PadStart y PadEnd (Toma 2 argumentos)
    1-La longitud deseada que se quiere obtener
    2-Caracter que se va a rellenar para completar la longitud
Si no se le pasa ninguno de los dos parametros, por defecto se utiliza como segundo parametro " "
*/

let miStringRellenoStart = miString.padStart(miString.length+3,"*");
let miStringRellenoEnd = miString.padEnd(miString.length+1,"*");
console.log(`\n Mi String Relleno al principio: ${miStringRellenoStart}`);
console.log(`\n Mi String Relleno al final: ${miStringRellenoEnd}`);

/* repeat(Toma 1 argumento)
    1-Numero de veces que se repite el string

    */
let repetido = miString.repeat(4);
console.log(`Mi string repetido 4 veces: ${repetido}`);


/*match (Toma  1 argumento)
    Busca coincidencias con un patron o expresion regular
    Devuelve un arreglo con las coincidencias encontradas o null si no hay ninguna
    El último parametro /gi se utiliza para que  busque mayusculas/minusculas. Si se quita la i, solo buscará los parametros que hayamos establecido
    Si hemos establecido que se busquen solo mayúsculas, quitando la i, solo buscará las mayúsculas. Si añadimos la i, también tendrá en cuenta las minúsculas.
    Con las minúsculas lo mismo.
*/
console.log(`Lista con las coincidencias utilizando la funcion match: ${miString.match(/[A-Z]/gi)}`);  //Buscamos todas las vocales mayus
miString.match(/[aeiou]/gi); /* Busca todas las vocales del string */
// match devuelve un array con las coincidencias 
if(!miString.match(/[aeiou]/gi)) {
    console.log("\n El string no contiene vocal")
}else{
    console.log("\n El string contiene vocal")
}

/*concat (Toma 1 o más parametros de entrada)
    1-Se trata de una lista de objetos, que pueden ser strings, listas, enteros, booleanos, que la función los va a transformar a strings 
    Devuelve como parametro de salida el string inicial concatenando los elementos de entrada*/
var arrStrings = ["Hola"," ","que","tal"];
console.log(`Probando la utilización de la función concat: ${miString.concat(" con función concat")} `);
console.log(`Probando la utilización de la función concat: ${miString.concat(arrStrings)} `);
console.log(`Probando la utilización de la función concat: ${miString.concat(5,6)} `);
console.log(`Probando la utilización de la función concat: ${miString.concat(false)} `);


/* endsWith & startswith (Toma 2 argumentos de entrada)
    1- El elemento a buscar en el string. Este objecto será convertido directamente a string si lo que le pasa no se trata de un string
    2- (OPCIONAL) La posición a partir de la que se busca el objeto requerido
    Devuelve true si en el string se encuentra el elemento a buscar y false en caso contrario */
console.log(`Parametro miString ¿termina por s?: ${miString.endsWith('s')}`); //Devuelve true o false dependiendo de si termina con 's'
console.log(`Parametro miString ¿empieza por ho?: ${miString.startsWith('Ho')}`); //Devuelve true o false dependiendo de si comienza con 'Ho'

console.log(`${miString.startsWith("Ho",5)}`); //Devuelve true si en la posición 6 empieza por el string requerido
console.log(`Parametro miString empieza por Ho en la posición 0: ${miString.startsWith("Ho",0)}`); 
console.log(`Parametro miString termina por mundo: ${miString.endsWith('mundo')}`); 
console.log(`Parametro miString termina por Mundo: ${miString.endsWith('Mundo')}`); 

/*localeCompare (Toma 2 argumentos como parametros de entrada)
    1-El string origen 
    2-El string con el que se quiere comparar con el string origen
    3- Otros parametros que no se que significan
    Devuelve 0 si son iguales, 1 si el primer string es mayor que el segundo y -1 si el primer string es menor que el segundo 
    */
console.log(miString.localeCompare("Hola Mundo")); //Devuelve 0 si son iguales, 1 si el primer string es mayor que el segundo y -1 si el primer string es menor que el segundo


/*toLocaleLowerCase y toLocaleUpperCase (Toma 2 argumentos de entrada)
    1-El string que se quiere convertir 
    2-?
    Devuelve el string en minúsculas o mayúsculas según el caso
    La diferencia con toUpper o LowerCase es que este lo hace de acuerdo con la configuración regional actual del navegador o del entorno en el que se está ejecutando JavaScript. Por lo tanto, tiene en cuenta las reglas de mayúsculas específicas de cada idioma y puede producir resultados diferentes según la configuración regional. */
console.log(`Variable miString utilizando la función toLocaleLowerCase: ${miString.toLocaleLowerCase()}`);
miString.toLocaleLowerCase(); //Devuelve el string en minúsculas
miString.toLocaleUpperCase(); //Devuelve el string en mayúsculas

miString.toString(); //Devuelve el string en formato string