// Funciones: Funciones de bloque de codigo reutilizable, procesa info/datos

//function pedirNombre(salida) {
//    const nombre = prompt("Ingresa tu nombre:")
//    if (salida === "alert"){
//        alert (nombre)
//    }else {
//        console.log(nombre);
//    }
//    
//    
//}
//
//pedirNombre();
//
//function mostrarMensaje(mensaje, mensaje2, mensaje3, mensaje4){
//    console.log(mensaje);
//}
//mostrarMensaje("alo", 2, true, "tardes")
//
//
//function suma (a,b){
//    const resultado = a + b;
//    return resultado;
//}
//
//const resultadoSuma = suma(5,10);
//console.log(resultadoSuma);
//
//
////SCOPE: Es el alcance de una variable, donde se puede acceder a ella.
//
//
//function restar(a,b){
//    const a = 2
//    const b = 2
//
//    return a - b;
//}


//ACTIVIDAD: Hacer un programa que permite realizar operaciones matematicas hasta que el usuario ingrese la palabra ESC

//ingrese una opicion 1- suma 2- resta 3- multiplicacion 4- division 5- salir
//pedir dos numeros y mostrar por alert el resultado de la operacion
//volver a preguntar por una opcion.

function calculadora() {

    let operacion = prompt("Ingrese una opción: 1 - Suma, 2 - Resta, 3 - Multiplicación, 4 - División, ESC para salir");

    while (operacion !== "ESC") {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        let resultado;

        switch (operacion) {
            case "1":
                resultado = num1 + num2;
                alert(`Resultado de la suma: ${resultado}`);
                break;
            case "2":
                resultado = num1 - num2;
                alert(`Resultado de la resta: ${resultado}`);
                break;
            case "3":
                resultado = num1 * num2;
                alert(`Resultado de la multiplicación: ${resultado}`);
                break;
            case "4":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                    alert(`Resultado de la división: ${resultado}`);
                } else {
                    alert("Error: División por cero no permitida.");
                }
                break;
            default:
                alert("Operación no válida. Intente nuevamente.");
        }

        operacion = prompt("Ingrese una opción: 1 - Suma, 2 - Resta, 3 - Multiplicación, 4 - División, ESC para salir");
    }

    alert("Calculadora cerrada.");              




}


calculadora();


