// Métodos
//En los objetos, los valores se pueden establecer en funciones. Las funciones guardadas en un objeto se denominan métodos.length, .push, .pop...
const nuevoObjeto = {
    decirHola: function() {
        console.log('Hola a todo el mundo!');
    }
}

nuevoObjeto.decirHola(); //Hola a todo el mundo!


//Usanfo for_in recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves. Podemos usar esta clave, y la notación de corchetes, en nuestro bucle for para acceder al valor asociado con esa clave.
const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
}

//this
//Cuando se llama dentro de un objeto, se refiere a ese mismo objeto. this puede usarse para acceder a otras claves en el mismo objeto, y es especialmente útil en métodos:
const usuario2 = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42,
    decirHola: function(){
        console.log( this.username + ' manda saludos!');
    }
};
usuario2.decirHola(); // 'juan.perez manda saludos!'


// this hace referencia a `o`
var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
};
console.log(o.f());



//En este caso, no depende donde hayamos definido la función, lo único que importa es que la función haya sido invocada como método de un objeto. Por ejemplo, si definimos la función afuera:
var u = {prop: 37};
// declaramos la función
function loguea() {
    return this.prop;
}

//agregamos la función como método del objeto `o`
u.f = loguea;
console.log(u.f());
// el resultado es le mismo!

//El siguiente caso tendremos de una función que no hace referencia a la variable global y por ello hola! no se ve en cambio
//tampoco podemos acceder desde fuera a esta funcion
var obj = {
    nombre: 'Objeto',
    log: function(){
      this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
      console.log(this)  // obj

      var cambia = function( str ){
        this.nombre = str;  // Uno esperaria que this sea `obj`
      }

      cambia('Hoola!!');
      console.log(this);
    }
}

//Para resolverlo un patrón muy común, y se basa en guardar la referencia al objeto que está en this antes de entrar a una función donde no se sabe que valor puede tomar this:
//De esta forma, that (puede tener cualquier nombre) va a apuntar al objeto obj (this apuntaba a ese objeto cuando hicimos la asignación). Ahora si, podemos usar that en vez de this y estar seguros qué es lo que va a tener adentro.

var obj = {
    nombre: 'Objeto',
    log   : function(){
      this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
      console.log(this); // obj
  
      var that = this; // Guardo la referencia a this
  
      var cambia = function( str ){
        that.nombre = str;  // Uso la referencia dentro de esta funcion
      }
  
      cambia('Hoola!!');
      console.log(this);
    }
}

//########Ejercicio

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    producto.calcularPrecioDescuento = function () {
      return this.precio - (this.precio * this.porcentajeDeDescuento);
    };
  return producto;
  
  }