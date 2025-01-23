//Class e instanciación pseudo-clásica
// En aras de la discusión, llamaremos a nuestros objetos de clase 'clases'. Se instancia de manera pseudo clásica, usando la palabra clave new, y puede tomar argumentos.
function Gato(nombre) {
    // El nuevo operador crea un objeto, "this"
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!';
    }
    // Devuelve el objeto "this"
}

const sam = new Gato('Sam');
const kitty = new Gato('Kitty');
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'

/*`La palabra clave this puede comenzar a volverse muy confusa cuando 
comenzamos a usarla en clases. En el último ejemplo lo usamos en el método
de los maullidos. Una buena regla general si no está seguro de a qué se refiere 
this, es observar dónde se llama el método y el objeto a la izquierda del 'punto'. 
Ese es el objeto al que se refiere this.`*/



///prototype
/* cada vez que creamos un nuevo objeto de clase con métodos, estamos recreando esos métodos en la memoria.
Las clases tienen una forma única de establecer un método una vez y dar acceso a cada objeto de esa clase a esos métodos. 
Esto se llama el prototype. Cada clase tiene una propiedad prototype, que luego podemos establecer en métodos:*/
function Usuario(nombre, github) {
    this.nombre = nombre;
    this.github = github;
}

Usuario.prototype.introduccion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi usuario de Github es ' + this.github + '.';
}

let juan = new Usuario('Juan', 'juan.perez');
let antonio = new Usuario('Antonio', 'atralice');

console.log(juan.introduccion()); // Mi nombre es Juan, mi usuario de Github es juan.perez.
console.log(antonio.introduccion()); // Mi nombre es Antonio, mi usuario de Github es atralice.



//Hasta ahora siempre que teníamos que crear un objeto nuevo declarábamos un object literal, pero vamos a ver que hay otros 
// métodos que nos da el prototype de Object para cumplir esa tarea

//Object.create
// creo un objecto con un objeto vacio como proto
var obj1 = Object.create({})
// creo que un objeto a partir de un proto de Objeto
var obj2 = Object.create(Object.prototype)
// que es lo mismo que crear un objeto vacio literal

//Object.assign
//El método assign de los objetos te permite agregar propiedades a un objeto pasado por parámetro
var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por `referencia`
Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})
/*> obj.nombre
    R//: 'Emi' */


//Herencia en JavaScript
/*En JS a diferencia de la herencia clásica nos manejamos con prototipos, 
que van a tomar los métodos pasados por sus 'padres' mediante la Prototype Chain.

Cuando generamos un arreglo nuevo podemos acceder a métodos como map o slice gracias 
a que los heredamos del Objeto Array que esta vinculado en la propiedad __proto__ y es 
el siguiente en el Prototype Chain.

Nosotros también podemos generar nuestros propios constructores de los cuales heredar. 
Creemos un constructor de el cual pueda haber variantes.*/
function Persona(nombre,apellido,ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
  }

Persona.prototype.saludar = function() {
    console.log('Soy '+this.nombre+' de '+this.ciudad);
}

var Emi = new Persona('Emi', 'Chequer', 'Buenos Aires');

Emi.saludar()
//R//'Soy Emi de Buenos Aires'


//Constructores Anidados

function Alumno(nombre,apellido,ciudad,curso) {
    // podría copiar las mismas propiedades de Persona acá adentro
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.curso = curso
}
//Pero en este caso estaríamos repitiendo código, y si en un futuro quisiera cambiar una propiedad 
// tendría que hacerlo en ambos constructores. Descartemos esta opción.

// lo que nosotros queremos es poder reutilizar las propiedades de persona,
function Alumno(nombre, apellido, ciudad, curso) {
    // usemos nuestro constructor Persona dentro del de Alumno
    Persona.call(this, nombre, apellido, ciudad);
    // vamos a necesitar el call porque queremos que las propiedades de persona, queden en bajo el objeto que va a devolver Alumno, y no uno nuevo del constructor Persona.
    // luego le paso los valores que quiero que reciba el constructor de Alumno
    
    // finalmente le agrego los puntos propios de Alumno
    this.curso = curso;
    this.empresa = 'ITM';
}

var santi = new Alumno('Santiago', 'Molina', 'Colombia', 'Ingeniero')

// Ahora si tenemos nuestra instancia creada a partir de ambos constructores
/*> santi.curso
R// Ingeniero

> santi.apellido
R// Molina

> santi.saludar()
R// Uncaught TypeError: toni.saludar is not a 'function'
 que paso? */

/*Como podemos ver los métodos de Personas no fueron pasados a nuestros Alumnos. 
Veamos un poco el porqué.

El constructor del __proto__ esta ligado a Alumno y luego al Object Object de JS. 
Pero el método saludar esta en el objeto prototype de Personas... , y esta perfecto, 
así es como debería funcionar, las instancias acceden al __proto__ que fue vinculado por el 
constructor para ver que métodos tienen. Nuestro problema es que al llamar a Persona con call 
en vez de con el método new no se esta haciendo ese vinculo en el que Persona.prototype se mete 
en nuestro Prototype Chain, y entonces las instancias de Alumno no tienen acceso a los métodos 
de Persona

Vamos a solucionar ese problema agregando al prototipo los métodos de Persona, para esto vamos 
a usar el método Object.create.*/


// usamos `Object.create` porque este guardaba el argumento pasado como `__proto__` del objeto a retornar
Alumno.prototype = Object.create(Persona.prototype)

// si recuerdan el objeto prototype siempre tenia una propiedad constructor que hacia referencia a la función en si, con la asignación que hicimos arriba lo pisamos, por lo que deberíamos volver a agregarlo.
Alumno.prototype.constructor = Alumno

var Franco = new Alumno('Franco','Etcheverri','Montevideo','Bootcamp')

Franco.saludar()
//R//'Soy Franco de Montevideo'



///###################################Ejemplos

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
    function Usuario(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
  
    Usuario.prototype.saludar = function(){
      return "Hola, mi nombre es " + this.nombre;
    };
  
    return Usuario;
  
  }
  
  function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
    Constructor.prototype.saludar = function(){
      return "Hello World!";
    }
  }
  
  function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
  
    String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
  }
  
  // ---------------------------------------------------------------------------//
    //Crea el constructor de la clase "Persona"
    //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
    //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
    //Ej: {
      //   Nombre: 'Juan',
      //   Apellido: 'Perez',
      //   Edad: 22,
      //   Domicilio: 'Saavedra 123'
      //  }
  
    class Persona {
      constructor(nombre, apellido, edad, domicilio/*Escribir los argumentos que recibe el constructor*/) {
        // Crea el constructor:
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio
        this.detalle = function() {
          return {
            Nombre: this.nombre,
            Apellido: this.apellido,
            Edad: this.edad,
            Domicilio: this.domicilio
          }
        }
      }
  }
  
  function crearInstanciaPersona(nombre, apellido, edad, dir) {
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    var persona = new Persona(nombre, apellido, edad, dir);
    return persona;
  }
  
  function agregarMetodo() {
    //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
    //Ej: "Juan, 22 años"
    Persona.prototype.datos = function () {
      return this.nombre + ", " + this.edad + " años";
    }
  }