//CREATION ARRAYS
//Existen 3 formas diferentes de crear un array. 
let array1 = new Array("Sergio", "Javier", "Cristina")
let array2 = Array("Sergio", "Javier", "Cristina")
let array3 = ["Sergio", "Javier", "Cristina"] //Array literal o  bracket syntax. 
console.log(array1) 
console.log(array2) 
console.log(array3) 
const fish = ["Lion", , "Angel"];

//Tambien podemos generar un array vacio con el constructor con "x" posiciones vacias, que se le pasan por parametro
let arraylenght1 = new Array(5)
let arraylenght2 = Array(5)
const arraylenght3 = [];
arraylenght3.length = 5;

console.log(arraylenght1)
console.log(arraylenght2)
console.log(arraylenght3)

// ---------------------------La propiedad length en los arrays ----------------------------------------

const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31

const cats2 = ["Dusty", "Misty", "Twiggy"];
console.log(cats2.length); // 3

cats2.length = 2;
console.log(cats2); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats2.length = 0;
console.log(cats2); // []; the cats2 array is empty

cats2.length = 3;
console.log(cats2); // [ <3 empty items> ]


