function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soySANTIAGO -> soySANTIAGO
    //Escribe tu código aquí
    const arrM = []
    const arrm = []
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if(element.toUpperCase() === element){
        arrM.push(element)
      }else{
  
        arrm.push(element)
      }
    }
    return arrM.join('') + arrm.join('')
}

  
function deObjetoAmatriz(objeto){
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    const arr = []
    for(let i in objeto){
      arr.push([i,objeto[i]])
    }
    return arr
}
  
  
function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    const obj = {}
    for (let i = 0; i < string.length; i++) {
      const character = string[i]
      if(!obj[character]){
        obj[character] = 1
      }else if(obj[character]) {
        obj[character]++
      }
    }
    return obj
  
}