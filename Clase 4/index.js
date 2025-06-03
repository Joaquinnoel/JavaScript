let numeros = [1,2,3,4,5];

console.log ( numeros);

console.log (numeros[2]);


let palabras = ["auto","manzana", "pera", "casa"];
console.log (palabras);
console.log (palabras[1]);

let booleanos = [true, false, true];
console.log (booleanos);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]

console.log(matriz);
console.log(matriz[2][1]); // Acceso al elemento 8 en la matriz



// Supongamos que tenemos el siguiente array de números
const number = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Esto imprimirá cada número del array en la consola
}
//METODOS DE MODIFICACION DE ARRAYS
//Metodo PUSH
// Agregar un elemento al final del array
let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas);

//Metodo POP
// Eliminar el último elemento del array
let frutas2 = ["manzana", "durazno", "cereza"];
frutas2.pop();
console.log(frutas2); // Imprime ["manzana", "durazno"]

//Metodo SHIFT
// Eliminar el primer elemento del array
let frutas3 = ["manzana", "banana","cereza"];
frutas3.shift();
console.log(frutas3); // Imprime ["banana", "cereza"]

//Metodo UNSHIFT
// Agregar un elemento al inicio del array
let autos = ["Toyota", "Ram"];
autos.unshift("Honda");
console.log(autos); // Imprime ["Honda", "Toyota", "Ram"]

//METODOS DE BUSQUEDA DE ARRAYS
//Metodo IndexOf
// Buscar el índice de un elemento en el array
let colores = ["rojo","verde","violeta"];
let indice = colores.indexOf("violeta");
console.log(indice); // Imprime 2, que es el índice de "violeta"

//Metodo Includes
// Verificar si un elemento está en el array
let animales = ["perros", "gatos","leones"];
let contiene = animales.includes ("leones");
console.log(contiene); // Imprime true, porque "leones" está en el array



//ORDENAR ARRAYS
//Metodo Sort: Ordena los elementos de un array de manerra ascendente o descendente
let numerosDesordenados = [300,2,56,1,60];
numerosDesordenados.sort((a,b)=> a- b);
// Esto ordena el array de menor a mayor
console.log(numerosDesordenados); // Imprime [1, 2, 56, 60, 300]


//Metodo Reverse: Invierte el orden de los elementos en un array
let numerosOrdenados = [1,2,3,4,5];
numerosOrdenados.reverse();
console.log(numerosOrdenados); // Imprime [5, 4, 3, 2, 1]


//CONCATENAR ARRAYS
//Metodo Join: Une todos los elementos de un array en una cadena de texto
let tiposDeFrutas = ["manzana", "banana", "cereza"];
let cadenaFrutas = tiposDeFrutas.join();
console.log(cadenaFrutas); // Imprime "manzana,banana,cereza"

let tiposDeFrutas2 = ["manzana", "banana", "cereza"];
let cadenaFrutas2 = tiposDeFrutas2.join("  ");
console.log(cadenaFrutas2); // Imprime "manzana  banana  cereza"

let tiposDeFrutas3 = ["manzana", "banana", "cereza"];
let cadenaFrutas3 = tiposDeFrutas3.join(" - ");
console.log(cadenaFrutas3); // Imprime "manzana - banana - cereza"


//ARRAY DE OBJETOS: Son la representación de un objeto en un array
const alumnos = {
    id: "123",
    nombre: "Juan",
    curso: ["React"],
    estaAlDia: true,
    edad: 20,
    domicilio: {
        calle: "Argerich 1844",
        ciudad: "Buenos Aires",
    }
}

console.log(alumnos.nombre)
console.log(alumnos.domicilio.calle);
alumnos.curso.includes("JavaScript");
console.log(alumnos.apellido); // Imprime undefined porque no existe la propiedad "apellido"    


//Metodo Find: Busca un elemento en un array que cumpla con una condición específica
const estudiantes = [
    { id: 1, nombre: "Ana", edad: 22 },
    { id: 2, nombre: "Luis", edad: 20 },
    { id: 3, nombre: "Pedro", edad: 23 }
];

const alumnoEncontrado= estudiantes.find((alumnos) => {
    return alumnos.nombre === "Luis";
})

console.log(alumnoEncontrado); // Imprime el objeto del alumno con nombre "Luis"



//CLASE VIRTUAL EJEMPLOS Y ACTIVIDADES



//Metodo Split: Separa en base a un caracter por parametro --> Devuelve un array
//2025/6/3 --> split("/") --> [2025, 6, 3] --> reverse() --> [3, 6, 2025] --> join("-") --> "3-6-2025"

