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


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "Eolartem! xd xd " || Devuelve ---> "!metraloE dx dx"
  //Escribe tu código aquí

  let string = str.split(" ")
  let arr = []
  for (let j = 0; j < string.length; j++) {
    arr.push(string[j].split("").reverse().join(""))

  }
  return arr.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString()
  let string = str.split("").reverse().join("")
  
  if (str === string) {
    return "Es capicua"
  }else{
    return "No es capicua"
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arr = []
  for (let i = 0; i < cadena.length; i++) {
    const element = cadena[i];
    if (element !== "a" && element !== "b" && element !== "c") {
      arr.push(element)
    }
  }
  return  arr.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        // Intercambiar elementos
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = []
  for (let i = 0; i < arreglo1.length; i++) {
    const element = arreglo1[i];
    if (arreglo2.includes(element) ){
      arr.push(element)
    }
    
  }
  return arr

}