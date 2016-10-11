
/* =============  ESTRUCTURA EN HTML  =============  */

// Anadir script en HTML
<script src="#"></script>

/* =============  ESTRUCTURA EN HTML  =============  */

/*
===================================================
===================================================
=================  VARIABLES   ====================
===================================================
===================================================
===================================================
*/

// Definiciones
var variable;
var texto = 'string';
var numero = 3;
var booleana = false;
var textoConComillaSimple = "Walter's Food":
var textoConComillaDoble = '\"Ta guena\" la comida'
var ingreso, impuesto, total;
ingreso = 100;
impuesto = 0.19;
total = ingreso*impuesto;

//Concatenación
var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre + " " + apellido;
// Los string pueden considerarse como un array de caractéres, por lo tanto:
nombre.length; // 4
nombre.toUpperCase; // Todo en mayúscula
var separarNombre = nombreCompleto.split(" "); //[0] = Juan ; [1] = Perez
var buscarSiSeApellidadPerez = nombreCompleto.indexOf("Perez"); // En esto caso buscarSiseApellidaPerez = 1; Si no existe la palabra, = -1
var buscarSiSeApellidadPerez = nombreCompleto.lastIndexOfindexOf("Perez"); // busca el último perez en el string

var frase = "Esta es otra frase";
var segmento = frase.slice(5,9); // segmento = otra;
/*
===================================================
===================================================
=================  VARIABLES   ====================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
=================    ARRAY    =====================
===================================================
===================================================
===================================================
*/


//Construcción
var array = [];

//Array Literal
var equipos;
equipos = ['colo', 'u', 'uc', 19, true];
equipos = ['colo',
           'u',
           'uc'];

//Array Constructor: es lo mismo que el de arriba pero con la palabra "new"
var colores = new Array('blanco','azul','negro');
var colores = Array();
var colores = Array(5); // Todas estas formas son lo mismo

//Acceder
var itemDos = colores[1];

//Cambiar
colores[2] = 'rojo';

//Methods de un array
var totalColores = colores.length;
var coloresAlReves = colores.reverse();
var unaSolaStringDeUnArray = colores.join();

//Array de Arrays
var copas = [["colocolo", 20], ["uchile", 10], ["catolica", 10]];
//Para acceder a las copas de la UC sería:
copas[2][1];

// Array de Funciones
var matematicas = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

/*
===================================================
===================================================
=================    ARRAY    =====================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
=================  FUNCIONES  =====================
===================================================
===================================================
===================================================
*/

//Construcción (Function Declaration)
function holaMundo(){
    document.write('Hola Mundo');
}

//Calling
holaMundo();

//Construcción con Parámetros
function holaTu (nombre, apellido);{
    var nombreCompleto = nombre+apellido;
    return nombreCompleto;
}

//Calling
var dimeQuienEres = holaTu('Juan','Perez');

//Devolver varios valores
function getValores (ancho, alto, largo){
    var area = ancho*alto;
    var volumen = ancho*alto^largo;
    var valores = [area,volumen];
    return valores;
}

//Calling
var area = getValores(10,20,7)[0];
var volumen = getValores(10,20,4)[1];

//Tipos de Funciones
//Function Declaration (Named Functions): Crea una función para llamarla por el nombre despues. Esta funcion siempre existe en la memoria.
function holaTu (nombre, apellido){
    var nombreCompleto = nombre+apellido;
    return nombreCompleto;
}

// Para llamarla:
holaTu("juan","soto");

//Function Expression (Anonymous Function): La función es tratada como una expresion y solo aparece cuando llega a esa línea de código. Si no, NO existe. Esta función solo existe cuando se llega a ella.
var adiosATodos = function chaoTu (nombre, apellido){
    var nombreCompleto = nombre+apellido;
    return nombreCompleto;
}; // OJO con los punto y comas finales

//Para llamarla tengo que llamar al nombre de la variable que contiene esa función
adiosATodos("cris", "valenzuela");

// Esto lleva a que el nombre 'chaoTu' sea irrelevante pues ya está contenido en el nombre de la variable
// De aquí, surgen las Funciones Anónimas o Anonymous Function:
var helloWorld = function (numero1, numero2){
    return numero1 * numero2;
}
// Y para llamarla ocupo igual que antes:
helloWorld(2,9);
helloWorld(2,9);

// También puedo declararlas y asignarles variables después:
function helloWorld(){
    return "Hello World"
}
//En otra parte del código...
 var holaMundo = helloWorld();

//==== Immediately Invoked Function Expressions :: IIFE ====
//Repasando entonces, hay varias formas de crear una funcion: funtion declaration:
function funcion (a, b){
    return a*b;
}
// O tambien Anonymous Function Expressions
var x = funcion (c,d){
    return c+d;
};
// Y también una nueva forma que se auto ejecturará cuando se declare: Immediately Invoked Function Expressions
(function(){
    alert("hola");
})();

// OJO CON LOS PARÉNTESIS GENERALES PARA CERRAR TODO: Estos determinan que la funcion es una expresion. Y LOS EJECTUDARORES FINALES "()": estos permiten ejecutar la funcion una vez leída.
// Para pasarle valores a una IIFE ocupo:

(function(nombre, apellido) {
    alert("My name is " + apellido + ", " + nombre + " " + apellido + ".");

})("Juan", "Perez");

// La gracia de un IIFE es que no deja rastro de su existencia una vez llamada. Ya que son funciones anónimas sin nombre. No se pueden trackear buscando variables ya que no tienen ningún tipo de variable asociada. Las variables dentro de IIFE son locales.
/*
===================================================
===================================================
=================  FUNCIONES  =====================
===================================================
===================================================
===================================================
*/

/*
===================================================
===================================================
=================   CLOSURE   =====================
===================================================
===================================================
===================================================
*/
// Un closure es cuando una función local es capaz de acceder a variables del scope global de la funcion madre: Simplemente acceder a variables fuera del scope léxico inmediato crea un closure.
// Un closure sirve para crear funciones muy similares de manera muy eficiente
// En este caso, la función closeX ve a 'x' como una varible de scope global y por eso puedo acceder a ella
function testClosure(){
    var x = 4;
    function closeX{
        return x;
    }
    return closeX;
}

// Tambien puedo tener este tipo de Closure
function aviso(problema) {
  return function() {
  	alert("Tenemos el siguiente problema: "+ problema);
  };
}
// Para llamar a este closure hago:
var alertaUno = aviso("404");
alertaUno(); // Arrojará "Tenemos el siguiente problema: 404"

// La gracia de un closure esta en esto:
function aviso(problema) {
    var numeroAlertas = 0;
    return function(magnitud, lugar) {
        numeroAlertas++;
        alert("Tenemos el " + problema + "Numero " + magnitud + "en " + lugar);
  };
}
// Luego creo distintas variables que almacen la misma funcion
var terremoto = aviso("terremoto");
var tsunami = aviso("tsunami");
var incendio = aviso("incendio");
// Y las llamo con parámetros específicos:
terremoto(6.4,"Santiago");
tsunami(10,"Viña");


// Ejemplo bien bueno: (resultado es 122)
function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);


//PRIMERO, 'hidden' se convierte en:
hidden = function mystery2(multiplier){
    multiplier = multiplier*5
    return 4 * multiplier
    }

//LUEGO, 'jumble' se convierte en:
jumble = function mystery4(bonus){
    return mystery2(6) + bonus
}

//donde mystery2(6) = 6*5*4 = 120
//ASI queda:
result = jumble(2) = mystery2(6) + bonus = mystery4(120) + 2 = 120 + 2 = 122



/*
===================================================
===================================================
=================   CLOSURE   =====================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
=================  HOISTING  ======================
===================================================
===================================================
===================================================
*/

//HOISTING es la propiedad de JavaScript para 'izar' o subir las declaraciones (variables, funciones,etc) al tope del scope. SOLO las declaraciones NO las asignaciones.

// Esto funciona ya que la declarcion 'var x;' es subida al principio del código
x = 5;
alert(x);
var x;

//Sin embargo, esto no funciona:
var x = 5;
alert(x+y);
var y = 7;
// Ya que la asignación no se sube como si lo hacen las declaraciones.


/*
===================================================
===================================================
=================  HOISTING  ======================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
=================   OBJETOS   =====================
===================================================
===================================================
===================================================
*/

var libros = ["Detectives", "Amorsh"] // Array para el ejemplo

//OBJECT LITERAL: se definen las propiedas dentro de corchetes
var miCaja = { alto: 5, ancho: 4, largo: 10, volumen: 200, material: "cartón", contenido: libros }; // {} crea un nuevo objeto en JS

// Otra manera de hacerlo ees así también:
var jugador = new Object();
jugador.nombre = "Lionel";
jugador.goles = 10000;
jugador.ranking = 1;

//Para acceder a las propiedades:
miCaja.alto; // 5
miCaja.ancho; // 4

//Para cambiar las propiedades
miCaja.alto = 12;
miCaja.contenido.push("Misterio"); // Añadir un nuevo elemento al array externo.

//Para añadir nuevas propiedades
miCaja.peso = 22;

//Acceder a las propiedades de un objeto con brackets:
miCaja["volumen"]; //La propiedad va como un string. Es como acceder a un index en un array.
//También se pueden crear nuevas propiedades:
miCaja["# de libros"] = 0; // En esto caso, la propiedad tiene espacios por lo que no podría llamarla usando miCaja.# de libros. Tendría que usar:
miCaja["# de libros"];

//Borrar propiedades:
delete miCaja.contenido;

//FUNCIONES PARA CREAR NUEVOS OBJETOS DINÁMICOS DENTRO DE OTROS OBJETOS
function nuevoLibro(caja, nombre, escritor){
    caja["# de libros"]++; // añade un nuevo libro a la propiedad "# de libros"
    caja["libro" + caja["# de libros"]] = {titulo: nombre, autor:escritor};
    // Primero crea la propiedad "libro1" y luego, asígnale un objeto con propiedades de título y autor.
}

//Así, al llamar a esta funcion dinámica:
nuevoLibro(miCaja, "Detectives Salvajes", "Roberto Bolaño"); // "# de libros" = 1; libro1 = {titulo: "Detectives Salvajes", autor: "Roberto Bolaño"};

//Para acceder a propiedades dentro de un objeto que está dentro de otro objeto:
miCaja.libro1.titulo;
miCaja["libro1"]["titulo"];







//PROTOTYPES AND INHERETANCE
// Every object has a Prototype
// Object with one function and one variable
var parent = {
  get: function fn(){
    return this.val:
  },
  val = 42
};

// Objeto that inherits all parent properties
var child = Object.create(parent);
child.val = 3.14156 // Add values to the chile
// Or even, create a grandchild:
var grandchild = Object.create(child);

parent.get(); // 42
child.get(); // 3.14156. JS will find get() in parent not in child, then will find this in child, that is equal to 3.14156
grandchild.get(); // will return 3.14156

// Polymorfism: same name but different behavior
// When child behaves different that parent although you call the same method name

// Create parent
var answer = {
  get: function fn1() {
    return this.val;  // 42
  }
  val: 42
};
// Create child
var firmAnswer = Object.create(answer);
// Create new method with same name as parent
firmAnswer.get = function fn2() {
  return this.val + "!!"; // 42!!
};

//But to still get the first function from the parent:
firmAnswer.get = function fn2() {
  return answer.get.call(this) + "!!";
}
firmAnswer.val = 3.14156;
firmAnswer.get(); // 3.14156!!

// Classes and Instantiation
var AnswerPrototype = {
  get: function fn1(){
    return this.val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get(); // 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14156;
dessertAnswer.get() // 3.14156

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2(){
  return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
luckyAnswer.get() // 7!!

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
magicAnswer.get(); 3!!

// But this has duplicated logic: .val everytime
// And violates encapsulation: change the classes not the initilizations
// So to fix that: Constructor
var AnswerPrototype = {
  constructor : function fn0 (value){
    this._val = value;
  },
  get: function fn1() {
    return this._val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42); // Initilize objects
lifeAnswer.get(); // 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14156);
dessertAnswer.get(); // 3.14156

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2 (){
  return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get(); // 7!!

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); // 3!!

/* === So to recap: Protoype Model is this way === */
var AnswerPrototype = {
  constructor : function fn0(value){
    this._val = value;
  },
  get: function fn1(){
    return this._val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get(); // 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14156);
dessertAnswer.get(); // 3.14156




/* === And the Classic Model is this way === */
// By convetion it starts with capital letters
function Answer (value){
  this._val = value;
}

Answer.prototype.get = function fn1(){
  return this._val;
};

var lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

var dessertAnswer = new Answer(3.14156);
dessertAnswer.get(); // 3.14156

// But with subclasses is more complicated in the classic model:
function FirmAnswer(value) {
  Answer.call(this,value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2(){
  return Answer.prototype.get.call(this) + "!!";
};

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // 7!!

var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); // 3!!







// New ES6 Syntax

class Answer{
  constructor(value){
    this._val = value;
  }
  get(){
    return this._val;
  }
}

var lifeAnswer = new Answer(42);
lifeAnswer.get(42) // 42

var dessertAnswer = new Answer(3.14156);
dessertAnswer.get(); // 3.14156

class FirmAnswer extends Answer {
  constructor(value){
    super(value);
  }
  get(){
    return super() + "!!";
  }
};

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // 7!!

var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); // 3!!


/*
===================================================
===================================================
=================   OBJECTS   =====================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
=================  OPERADORES  ====================
===================================================
===================================================
===================================================
*/

// Igualdad
var a = 1;
var b = 2;
var c = "1";

a == b; // False
a == c; // True

// Strict
a == b; // False
a === c; // False


//Ternary Operator: Es un if/else statement pero en una solo línea
// condicion ? true : false
var jugadorUno = 500;
var jugadorDos = 600;

var mayorPuntaje = (jugadorUno > jugadorDos) ? jugadorUno : jugadorDos;
/*
===================================================
===================================================
=================  OPERADORES  ====================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
==================   LOOPS    =====================
===================================================
===================================================
===================================================
*/

//IF: típico
if ( condicion ){
	// ejecutable
}else{

}

// WHILE: típico
while(condicion){
	// ejecutable
}

// DO WHILE: igual que el 'while' pero con la única diferencia que corre siempre una vez independiente si es verdadera la condición o no.
var a = 1;

do{
  console.log(a);
  a++;
} while (a < 10);


// FOR: típico, es lo mismo que un 'while' pero con todas las estructas en una sóla línea.
for(var x = 0; i < 10; i++){
 // ejecutable
}

// BREAK: Para salirse del loop
for (var i = 1; i < 1000 ; i++){
  // do stuff
  // do stuff
  if (i == 101){
    break; // Lo que hará será salirse del 'for loop' y terminar esa iteración
  }
  // do stuff
}

// CONTINUE: Parecido a 'break' pero no tan drástico
for (var i = 1; i < 5000 ; i++){
  // do stuff 1
  // do stuff 2
  if (i % 5 == 0){
    continue; // Lo que hará será salirse de 'esa' iteración para volver al inicio y seguir y NO ejecuta el 'do stuff 3'. Pero NO SE SALE.
  }
  // do stuff 3
}

/*
===================================================
===================================================
==================   LOOPS    =====================
===================================================
===================================================
===================================================
*/
