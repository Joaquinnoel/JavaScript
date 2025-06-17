//Funciones del Orden Superior: Son funciones que pueden recibir otras funciones como argumentos, retornar funciones como resuultado o ambas cosas.
//Recibir funciones como parametros
const numeros = [1,2,3,4];

function porCadaUno(array,fn){
    for(let i = 0; i < array.lenhgth; i++){
        fn(array[i])
    }
    
}
porCadaUno(numeros, console.log);

//Retornar Funciones
function mayorQue(n){
    return function(m){
        return m > n;
    }
}
let mayorQue10 = mayorQue(15);
console.log(mayorQue10(20));



//Metodos De Busqueda
// Foreach: Permite iterar sobre cada uno de los elementos de un array, ejecutando una funcion proporcionada en cada elemento.Es util para imprimir valores, modificar elementos o realizar calculos.
const numbers = [1,2,3,4,5];

numbers.forEach(function(number) {
    console.log (number);
});

//Uso del indice de la iteracion:
const frutas = ['manzana', 'banana', 'naranja'];
frutas.forEach(function(fruta,indice){
    console.log(`indice ${indice}: ${fruta}`);
});

//Modificacion de elementos:
const numeros2 = [1,2,3,4];
const duplicados =[];
numeros2.forEach(function(numero){
    duplicados.push(numero * 2);


});
console.log(duplicados);

//Metodos de Transformacion:
//Metodo Filter: Permite crear un nuevo array existente, incluyendo solamente aquellos elementos que cumplan con una condicion especifica.
const numeros3 = [1,2,3,4,5,6];
const numerosPares = numeros3.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);



const cursos = [
    {nombre: 'JavaScript', duracion: 8},
    {nombre: 'Python', duracion: 10},
    {nombre: 'React', duracion: 6},
];
const cursosLargos = cursos.filter(function(curso) {
    return curso.duracion > 6;

});
console.log(cursosLargos);

//Metodo Map: Permite transformar cada elemento de un array, aplicando una funcion a cada uno de ellos y devolviendo un nuevo array con los resultados.
const cursos2 = [
    {nombre: 'JavaScript', duracion: 8},
    {nombre: 'Python', duracion: 10},
    {nombre: 'React', duracion: 6},
];
const nombresCursos2 = cursos2.map(curso => curso.nombre);
console.log(nombresCursos2);

//Metodo Reduce: permite reducir un array a un unico valor.
//Recibe dos parametros: Una funcion reductora y un valor inicial.
const numeros4 = [1,2,3,4,5];
const suma = numeros4.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);

//Encontrar el valor maximo en un array:
const numeros5 = [10, 5 , 9, 20];
const maximo = numeros5.reduce(function(acumulador,numero){
    return Math.max(acumulador, numero);

});
console.log(maximo);