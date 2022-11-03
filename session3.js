//Dadas dos temperaturas, devuelve true si una es menor que 0 y la otra es mayor que 100.
function icyHot(temp1, temp2){
  if((temp1 < 0) || temp2 < 0){
    return true
  }else {
    return false
  }
}

console.log(icyHot(-1, 120))

//Implementa la función comboString para que reciba dos cadenas, a y b, y devuelva una cadena de la forma corta + larga + corta, con la cadena más corta en el exterior y la cadena más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud 0).

function comboString(a, b){
    if(a.length > b.length) {
        return `${b}${a}${b}`
    }
    if(a.length < b.length) {
        return `${a}${b}${a}`
    }
}
console.log( comboString('Hi', 'Hello'))

//Dado un array de números enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso, por lo que [1, 2, 3] se convierte en [3, 2, 1].

function reverse3(nums){
  return nums.reverse().join()
}
console.log(reverse3([5, 11, 9]))

//Esto es demasiado sencillo, elimina los espacios de la cadena, luego devuelve la cadena resultante.

function noSpace(x){
    const arr = x.split(' ').filter(el => el !== " ")
    console.log(arr.join().replaceAll(',',''))
}
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')

//Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales.

function countSameEnds(str) {

}

countSameEnds("Pop! goes the balloon")


function countSameEnds(str) {
    const arr = str.trim().split(' ')
    let cont = 0
    arr.forEach(el => {
      if((el.substring(0,1)) && (el.substring(el.length-1,el.length-2))) {
        cont++
      }
    })
    return cont
}
  
console.log(countSameEnds("Pop! goes the balloon"))

//Esto es demasiado sencillo, elimina los espacios de la cadena, luego devuelve la cadena resultante.

function countSameEnds(str) {
    str = str.replace(/[^a-zA-Z ]/g, "")
    const arr = str.toLowerCase().split(' ')
    let cont = 0
    arr.forEach(el => {
      if(el.length !== 1) {
        ((el.substring(0,el.length-el.length+1)) === (el.substring(el.length-1,el.length)))
        ? cont += 1
        : cont += 0
      }
    })
    return cont
  }
  
  //Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.

  countSameEnds("No I am not in! a gang.")
  console.log(countSameEnds("Pop! goes the balloon"))
  countSameEnds("And the crowd goes wild!")

  function societyName(arr) {
    let str = ''
    arr.forEach(el => {
      str += el.substring(0,1)
    })
    return str
  }
  console.log(societyName(["Adam", "Sarah", "Malcolm"]))