//MÉTODO "FREEZE"
//La función Object.freeze tiene como parámetros de entrada, un objeto
//La función de este método es cambiar la manera en la que se trata al objeto, de tal forma que se convierta en una "constante",
//Es decir, que no se le puedan cambiar sus propiedades y valores.

var objeto = Object.freeze({valor: 5})
objeto.valor = 10
console.log(objeto.valor)
//MÉTODO "SEAL"
//La función Object.seal tiene como parámetros de entrada, un objeto
//La función de este método es cambiar la manera en la que se trata al objeto, de tal
// forma que se convierta en una "constante", pero con la diferencia de que se
//pueden agregar nuevas propiedades, pero no se pueden cambiar los valores de las
//existentes.
var objeto2 = Object.seal({valor: 5})
