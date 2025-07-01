// Fundamentos de Asincronismo
// Ejecucion Sincronica: Se refiere a la ejecucion de codigo de manera secuencial, donde cada linea de codigo se ejecuta una despues de la otra.
// Ejemplo:
console.log('inicio');
let resultado = operacionLenta()
console.log('Resultado:', resultado );
console.log ('fin');

//Ejecucion Asincronica: Permite que el codigo siga ejecutandose sin necesidad de esperar a que una operacion termine.
setTimeout(()=>{
    console.log('Esto se ejecuta despues de 2 segundos');
}, 2000);

// El Call Stack: es una estructura de datos en la que se registran las funciones que etsan siendo ejecutadas .
function first(){
    console.log('Primera Funcion');
    second();
    console.log('Primera Funcion-Parte 2');

}

function second(){
    console.log('Segunda Funcion');
}
first();


//Event Loop: Es el mecanismo q permite a JS manejar operacion asincronicas, como temporizadores y solicitudes HTTP.
//¿Como Funciona?
// 1. Cuando el Call Stack esta vacio, El Event Loop toma la primera tarea de la callback queue y la coloca en el Call Stack.
// 2. Asegura que las tareas se ejecuten en el orden correcto.

// Control de Errores: try-catch-finally
// Se utiliza para geestionar excepciones , perimitiendo ejecutar codigo bajo circuntancias controladadas.

//1. try: Se coloca el codigo que puede generar un error.
//2. catch: Se coloca el codigo que se ejecutara si ocurre un error en el bloque try.
//3. finally: Se ejecuta siempre, independientemente de si se produjo un error o
try{ 
    let resultado = dividir (10,0);
    console.log('Resultado:', resultado);

}catch (error){
    console.error('Error:',error.message);

}finally{
    console.log('Operacion Completada');

}
function dividir(a,b){
    if(b === 0){
        throw new Error('No se puede dividir por cero');

    }
    return a / b;
}