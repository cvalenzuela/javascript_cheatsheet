
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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

let variable = 3; // Fix variables

/*
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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

// Objet that inherits all parent properties
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

/*===== From JS Club =====*/
/* Part 1: Functional Prograaming */


// Functional programming
var box = document.createElement('div');
box.style.backgroundColor = 'black';
box.style.position = 'absolute';
box.style.width = '100px';
box.style.height = '100px';
document.body.appendChild(box);

// If you find yourself repeating code, the best thing to do
// is to wrap that code in a function to make it much more reusable
function moveBox(b, x, y) {
    b.style.top = x + 'px';
    b.style.left = y + 'px';
}

// Functions also allow us to abstract things that we dont' want to remember
// how to do.  Let's say we were doing some complex calculations to figure out
// the future location of the box based on it's current position and it's
// speed,
// we'd wrap that calculation in it's own function so that we only have to
// figure out how to do the calculations once, then we can just reuse it over
// and over
function changeColor(b, color) {
    b.style.backgroundColor = color;
}

moveBox(box, 10, 10);

// Set timeout is a good simple example of functional programming
// it takes 2 things as arguments, a function to execute, and a number that
// represents the time it should wait (in milliseconds) before funning the
// passed function. That's what functional programming is all about, passing
// functions to other functions.
setTimeout(function() {
    moveBox(box, 100, 100);
}, 2000);

var colors = ['blue', 3, 'orange', 'red', 'purple'];
var continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia', 'Antarctica'];

// I hate for loops, and I want a functional way to do it
// So I wrap a for loop in a function, that takes an array and another function
// then for each item in the passed in array, I want to execute the function
// I passed in on the array item
function forEach(array, fn) {
    var retArray = [];
    for (var i = 0; i < array.length; i++) {
        // Use the passed in function 'fn' on each array item
        retArray.push(fn(array[i]));
    }

    return retArray;
}

// this for each pattern is so nice that Javascript provides it for us
// automatically
// It also gives us a few more array functions - map, filter, reduce (look them
// up if you're curious, they can be very useful)
colors.forEach(function(elt, i, array) {
    console.log(elt);
});

// Map is another array iterator that returns a new array
var notColors = colors.map(function(color, i, array) {
    // The new items in the array will consist of whatever items are returned
    // inside this function
    return 'NOT ' + color;
});

// Filter returns a new array by removing some items from passed in array if
// they don't meet some test
var colorsWithoutIntegers = colors.filter(function(color) {
    // If this function returns true, the array item is kept, otherwise it's
    // not kept. NOTE: This doesn't affect the original array!
    if (typeof color === 'number') {
        return false;
    } else {
        return true;
    }
});
console.log(colors);
console.log(notColors);
console.log(colorsWithoutIntegers);

function upperCaseAndLog(string) {
    var s = string.toUpperCase()
}


function isString(str) {
    var ret = (typeof str === 'string');
    return ret;
}

function isNumber(num) {
    var ret = (typeof num === 'number');
    return ret;
}

function isObject(obj) {
    var ret = (typeof obj === 'object');
    return ret;
}

// This is tricky.  It's a function that modifies other functions.  It takes
// a function as an argument, creates a new function that calls the passed in
// function, modifies the result in some way, then returns the new version of
// the function
// This specific example negates a function that returns a boolean value
function negate(fn) {

    function negatedFn(arg) {
        var retVal = fn(arg);
        return !retVal;
    }

    return negatedFn;
}

var isNotString = negate(isString);
var isNotObject = negate(isObject);
var isNotNumber = negate(isNumber);

var s = 'string';
console.log(isString(s));
console.log(isNotString(3));

// I can also pass functions in directly to our array iterators.
var result = forEach(colors, isNotString);
console.log(result);
// Do other stuff
//forEach(continents);


// What is an object?
// Everything is an object (or a primative - i.e. number, string, bool);
var x = 3;

// x is a number
// But it's also an object, check it out in the browser
// It's basically the same as doing this:
var X = new Number(3);

var s = 'a string primative';
var S = new String('a string object');
// In particular with strings, notice how the Object variant stores each
// character of the string as a property on an object.

// NOTE: I'm just showing you that strings and numbers are actually Objects
// under the hood, but when you're actually coding, don't create primatives
// using the 'new Number' or 'new String' syntax.

// We can do the same with objects
// i.e. use new Object() or new Array() - but don't actually do that in
// practice, use the literal notation instead ( {} and [] )

// Object literal
var o = {
    myStr: 'im a string',
    myNum: 3,
    myFunc: function(anArgument) {
        console.log(anArgument);
    },
    myObj: {
        anotherProp: 'Im another string'
    }
};

// What is Object Oriented Programming?
// In the simplest sense, it's a way of imitating real world things, like
// people, or cars, and keeping track of small differences between individual
// things while also keeping track of the similarities
// One of the fundamental principles of OOP is inheritance, the idea that
// things inherit properties from other things

var animal = {
    numberOfLegs: 0,
    soundIMake: '',
    speak: function() {
        console.log(this.soundIMake);
    },
    jump: function() {
        console.log('jump');
    },
    addLeg: function(n) {
        this.numberOfLegs = this.numberOfLegs + 1;
    }
};

// Inheritance -> cat and spider INHERIT properties and methods from animal
// meaning they have access to all the stuff that animals can do
var cat = Object.create(animal);
cat.numberOfLegs = 4;
cat.soundIMake = 'meow';
var spider = Object.create(animal);
spider.numberOfLegs = 8;
spider.soundIMake = 'scritch';

// Another way to create objects
// Constructor function
function Animal(numLegs, sound) {
    console.log(this);
    this.numberOfLegs = numLegs;
    this.soundIMake = sound;
}

Animal.prototype = {
    speak: function() {
        console.log(this.soundIMake);
    },
    jump: function() {
        console.log('jump');
    }
};

console.log('CALLING CONSTRUCTOR --------');
var cat = new Animal(4, 'meow');
var spider = new Animal(8, 'scritch');


var c = {
    numberOfLegs: 4,
    soundIMake: 'meow',
    speak: function() {
        console.log(this.soundIMake);
    }
};

var s = {
    numberOfLegs: 8,
    soundIMake: 'scritch',
    speak: function() {
        console.log(this.soundIMake);
    }
};

console.log(animal, cat, spider);

/* Part 2: OOP */

// Classical Object Orientated Programming uses classes (JavaScript DOES NOT
// use classes)
// Classical example
// THIS IS PSUEDOCODE, IT"S NOT REAL CODE IN ANY LANGUAGE,
// it just shows the basic outline of a class
//class Building(address, numRooms, owner) {
    //self.address = address;
    //self.numRooms = numRooms;
    //self.owner = owner;

    //self.logOwner = function() {
        //print self.owner;
    //}

    //self.addRooms = function(numRoomsToAdd) {
        //self.rooms += numRoomsToAdd;
    //}
//}
// Again, I want to stress that the above code is NOT VALID JAVASCRIPT, or any
// other language, it's just psuedocode

// Python Example
//class Dog:
    //def __init__(self, name):
        //self.name = name
        //self.tricks = []    # creates a new empty list for each dog

    //def add_trick(self, trick):
        //self.tricks.append(trick)

//fido = Dog('fido')
//spot = Dog('spot')

// A class acts like a template, we create individual (called instances) by
// using the template and giving it specifics about our object
// Create a few new Buildings
//var building1 = new Building('1 Blue Jay Way', 100, 'Enron');
//var building2 = new Building('42 Hitchikers Ave', 42, 'Haliburton');

// building1 and building2 are two distinct buildings, they share a similar
// structure (they have an address, a number of rooms, and an owner), but the
// details vary between the two buildings.

// In the classical scheme, the class itself is not an Object, it's just
// a Template. You only use the class to create new instances, or objects

// Javascript is weirdly different.  It doesn't have classes, it ONLY has
// Objects.  So instead of classes being used to create Objects, Objects are
// created by using a different object as a template. The difference is subtle,
// but important, in that template objects are still objects, and can be acted
// up just like any other object. I can change the template object, and it will
// affect all the objects created from the template.
//
// Confusingly, it also has a few different ways to create Objects, which can
// lead to a bunch of confusion.  You'll likely see the following:
//  1. new SomeObj();
//  2. Object.create(someObj);

// this IS valid JavaScript
var building = {
    numRooms: 100,
    owner: 'Enron',
    address: '1 Blue Jay Way',
    logOwner: function() {
        console.log(this.owner);
    },
    addRooms: function(numRoomsToAdd) {
        this.numRooms = this.numRooms + numRoomsToAdd;
    }
};

// I can't call building with the 'new' keyword, and we'll see why in a bit,
// but for now, I'm going to do things the second way
var building1 = Object.create(building);
var building2 = Object.create(building);

building1.address = '1 Inifinity Drive';
building1.numRooms = 850;
building1.owner = 'Apple';

/*
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
===================================================
===================================================
==================   LOOPS    =====================
===================================================
===================================================
===================================================
*/

/*
===================================================
===================================================
==================   NODE    ======================
===================================================
===================================================
===================================================
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
*/

/* Setup project and dependencies */
npm init
/* Install npm dependencies */
npm install <pkg> --save || npm instal --save <pkg>  // sometimes with sudo too. use --save for installing locally and -g for globally

/* Install all dependencies from package.json locally. When distributing. */
npm install

/* Auto Refresh server with nodemn */
sudo npm install nodemon -g // install globally
nodemon index.js // instead of node use nodemon for tracking refresh


/* Export a module when using require() in main file. This is a way to keep the code modular.*/
module.exports = {
  log: function(thing){
    console.log(thing);
  }
}

// Start a server with http-server module
http-server -p 8080 // runs in cd

// New module in new file
module.exports = function(){
 // Code

  return;
};


/*
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
===================================================
===================================================
==================   NODE    ======================
===================================================
===================================================
===================================================
*/


/*
===================================================
===================================================
==================   D3    ========================
===================================================
===================================================
===================================================
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
*/

// Selections
d3.select('.className #id')
  .text('change text') // Select the first element matching the className and/or id (css selector) and change its text
d3.selectAll('.className #id')
  .text('change text') // Select all elements and change its content
d3.selectAll('.className:nth-child(2)')
  .text('change name') // Select the n child in the "array" (it's not really an array). ITS NO 0 INDEX BASED!
// Types of nth-child(x)
x = odd; x = even; x = "2n"; x = "2n+1"; x = etc.

d3.select('.item') // Select for the first item with the class of .item
  .append('div') // Append a div to that item
  .html('<strong>This is a bold text</strong>') // Add a strong tag div

d3.select('#items') // Select for the div with id of items
  .append('span') // Append a span to the end of that item
  .html('<strong>This is a bold text</strong>') // Add a strong tag to that span

d3.select('#items') // Select for the div with id of items
  .append('span', ':nth-child(3)') // Append a span at the 3th item
  .html('<strong>This is a bold text</strong>') // Add a strong tag to that span

// Remove
d3.select('#chart .item:nth-child)3') // Select for id of chart and select the div with class item that is in the 3rd position
  .remove // Remove that element

// Modifying Attributes and CSS
d3.selectAll('.item') // Select al items with the class of item
  .attr('class' , 'highlight') // Erase all previous classes and add the class highlight to all of them

d3.selectAll('.item:nth-child(3)') // Select the 3rd item with the class of item
  .classed('highlight', true) // Add 'highlight' to that item
  .classed({ // Add classes with an object
    'highlight': true,
    'item': false,
    'bigger': true
  })

d3.selectAll('.item:nth-child3') // Select the 3rd item with the class of item
  .style({ // Add all this styles to the element
    'background' : '#268BDE',
    'padding' : '10px',
    'margin' : '5px',
    'color' : '#EEE8D5'
  })

// Binding data to the DOM
/*
 Using the data() operator with our dataset on a selection of DOM elements,
 we join both sets of items with each other item by item.*/

var myStylesOne = ['#268BDE']

d3.selectAll('.item') // Select all items with the class of item
  .data(myStylesOne) // add myStyles as data
  .style('background', myStylesOne[0]) // apply myStyles[0] to the first object (since the data only has one value)

var myStyles = [
  { width: 200,
    color: '#A57706'},
  { width: 200,
    color: '#268BDE'},
  { width: 200,
    color: '#FF7706'},
  { width: 200,
    color: '#A577FF'}
]

d3.selectAll('.item')
  .data(myStyles) // Add myStyles as data
  .style({
    'color' : 'white', // Color white for all items with .item
    'background' : function(d){ // Apply the first color to the first element in the selection
      return d.color;
    },
    width : function(d){ // Apply the first width to the first element in the selection
      return d.width + 'px';
    }
  })

  var myStyleswithName = [
    { width: 200,
      name : 'juan',
      color: '#A57706'},
    { width: 200,
      name : 'diego',
      color: '#268BDE'},
    { width: 200,
      name : 'andres',
      color: '#FF7706'},
    { width: 200,
      name : 'camila',
      color: '#A577FF'}
  ]

// Creating subselections with enter()
// When we call enter() on an existing selection, we switch
// to a sub-selection representing the data that is yet to be
// mapped to an element, because there is not yet enough of them on
// the page to represent all of the current dataset.
// In this case we start with just a <div id='#chart'></div> and add all the items recursively
d3.selectAll('#chart').selectAll('div') // Although there are no divs in the html, the enter() command after allows to select it anyways (sub-selection)
  .data(myStyleswithName)
  .enter().append('div') // Here, the enter() allows to place the div backagain at the beggining so it can be selected with the initial selectAll('div')
  .classed('item', true)
  .text(function(d){
    return d.name;
  })
  .style({
    'color' : 'white', // Color white for all items with .item
    'background' : function(d){ // Apply the first color to the first element in the selection
      return d.color;
    },
    width : function(d){ // Apply the first width to the first element in the selection
      return d.width + 'px';
    }
  })

// SVG
d3.select('#chart') // Select a div with id of #chart
  .append('svg') // Append a SVG tag
    .attr('width', 600) // Set the width of the svg
    .attr('height', 400)  // Set the height of the svg
    .style('background', '#93A1A1') // Set the background of the svg
  .append('rect') // Append a rectangle to the SVG
    .attr('x', 200)
    .attr('y', 100)
    .attr('height', 200)
    .attr('width', 200)
    style('fill', '#CB4B19')
  d3.select('svg') // Select the SVG if not, it will append the circle inside the rect
    .append('circle')
    .attr('cx', 200)
    .attr('cy', 100)
    .attr('r', 50)
    .style('fill', '#B4F919')

    /*
    This example creates a bar chart using D3.
    */

    // The data in array format
    var bardata = [];
    // Generate random set of numbers and push them to bardata
    // for(var i = 0; i < 50; i++){
    //   bardata.push(Math.random()*30);
    // }

    // Load data in TSV format
    d3.tsv('data.tsv', function(data){
      // Sort them in ascending order
      // bardata.sort(function compareNumbers(a,b){
      //   return a - b; // Sort my ascending order
      // })
      for (key in data){
        bardata.push(data[key].value)
      }
      // Set the margins
      var margin = {top: 30, right: 30, bottom: 40, left: 50}

      // Values of the graph
      var height = 400 - margin.top - margin.bottom,
          width = 600 - margin.left - margin.right,
          barWidth = 50,
          barOffset = 5;

      // Variable to store the value of each element
      var tempColor;

      // Linear Scale to use only two stops
      // var colors = d3.scale.linear()
      //   .domain([0,d3.max(bardata)])
      //   .range(['#FFB832','#C61C6F'])

      // Create a linear scale with 4 stops
      var colors = d3.scale.linear()
        .domain([0, bardata.length*.33, bardata.length*.66 ,bardata.length])
        .range(['#FFB832','#C61C6F','#268BD2', '#85992C'])

      // Create a linear scale to fit the values to the height of the SVG. Much as map()
      var yScale = d3.scale.linear()
        .domain([0,d3.max(bardata)]) // From '0' to 'max_value_find_in_array'
        .range([0,height]) // Remap to to '0' to 'height'

      // Create a ordinal scale to fit the values in the X axis
      var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length)) // d3.range creates an array like this [0,1,2,3]
        .rangeBands([0,width], 0.2, 0) // Remap it to '0' - 'width' and add a margin in between 0 and 1 and padding if necessary

      // Create the item that will appear when hover over the value
      var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', '0')

      // This is the chart element
      var myChart = d3.select('#chart').append('svg') // Select the #chart item and append a SVG
      // .style('background', '#C9D7D6') // Background of the SVG
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g') // Create a group so then all elements will append to that
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
        .selectAll('rect').data(bardata)  // Select all rects that will be created with enter() using data()
        .enter().append('rect')
          .style('fill', function(d,i){
            return colors(i); // Return the corresponding color in the remap array
          })
          .attr('width', xScale.rangeBand()) // Set the Width using the ordinal X scale
          .attr('x', function(d,i){
            return xScale(i);  // Set the position using the Xscale as well.
          })
          .attr('height', 0) // Start the graph with a value of 0 and then increment it with the anmination
          .attr('y', height) // Use the height as the starting value.

        // Events
        .on('mouseover', function(d){ // Mouse Over
            tooltip.transition()
              .style('opacity', .9) // Set the opacity of the tooltip
            tooltip.html(d) // Show the data '(d)' when hover over the element
              .style('left', (d3.event.pageX - 35) + 'px') // Put in a little bit on top
              .style('top', (d3.event.pageY - 30) + 'px')
            tempColor = this.style.fill; // Save the current color of the element
            d3.select(this) // When hover
              .style('opacity', .5)
              .style('fill', 'yellow') // Change the color to yellow
        })
        .on('mouseout', function(d){ // Mouse Out
          d3.select(this)
            .style('opacity', 1)
            .style('fill', tempColor) // Return to the original color
        })

      // Animations setting for each element that is created in the chart
      myChart.transition()
        .attr('height', function(d){
          return yScale(d); // Animate into position the height
        })
        .attr('y', function(d){
          return height - yScale(d); // Animate into position the height
        })
        .delay(function(d, i){
          return i * 20;  // Set a line by line animation for each element
        })
        .duration(1000) // Set the amount of time for each element
        .ease('elastic') // Use a easing animation

      // Create a Scale for the Y Axis
      var vGuideScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([height, 0])

      // Create Vertical Axis
      var vAxis = d3.svg.axis()
        .scale(vGuideScale) // Set the values using the yScale
        .orient('left') // Where should it appear
        .ticks(10) // 10 divisions

      // The element to append the Vertical axis
      var vGuide = d3.select('svg').append('g')
        vAxis(vGuide) // Link it to the Axis created before
        vGuide.attr('transform', 'translate('+ margin.left + ', ' + margin.top + ')') // Since the orientation is left, now we are applying a translation to show it more to the right
        vGuide.selectAll('path')
          .style({fill:'none', stroke: "#000"}) // Remove the background fill by default that the axis has
        vGuide.selectAll('line')
          .style({fill:'none', stroke: "#000"}) // Add horizontal tickmarks

      // Create Horizontal Axis
      var hAxis = d3.svg.axis()
        .scale(xScale) // Use the scale created for the X values
        .orient('bottom')
        .tickValues(xScale.domain().filter(function(d,i){ // Set the amount of division. First, take the range of values in the xScale (xScale.domain()), then, filter them so we only get every 5th element
          return !(i % (bardata.length/5));
        }))

      // The element to append the Horizontal axis
      var hGuide = d3.select('svg').append('g')
        hAxis(hGuide)
        hGuide.attr('transform', 'translate('+ margin.left + ', ' + (height + margin.top) + ')')
        hGuide.selectAll('path')
          .style({fill:'none', stroke: "#000"}) // Remove the background fill by default that the axis has
        hGuide.selectAll('line')
          .style({fill:'none', stroke: "#000"}) // Add vertical tickmarks
    });


/*
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
===================================================
===================================================
==================   D3    ========================
===================================================
===================================================
===================================================
*/
