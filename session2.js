//Implementa la función helloName para que dado un string name, por ejemplo "Bob", retorne un saludo de la forma "Hello Bob!".

const helloName = (name) => {
    return `Hello ${name}!`;
}

console.log(helloName('Angelica'))

//Completa la función intMax que recibe tres valores tipo int, a b c y retorna el mayor.

const intMax = (a,b,c) => {
    if(a > b && a > c) {
        return a
    }
    if(b > a && b > c) {
        return b
    }
    if(c > a && c > b) {
        return c
    }
}
console.log(intMax(5,2,7))

//Implementa la función firstLast6 que recibe un arreglo con números y retorne true si el número 6 es el primer o el último elemento del arreglo. El arreglo tendrá 1 o más elementos.

const firstLast6 = (arr) => {
    let res = ((arr[0] === 6) || (arr[arr.length-1] === 6)) ? true : false
    return res
}
  
console.log(firstLast6([13, 6, 1, 2, 3]))

//Comencemos! En este ejercicio deberás crear una función que retorne el string "something" unido con un espacio " " y el argumento dado a.

const giveMeSomething = (str) => {
    return `something ${str}`
}
