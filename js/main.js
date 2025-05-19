//Declarion:
let cliente;


//Asignacion de Valores:
cliente = "Carlos";
console.log (cliente)

cliente = "Roman";

console.log(cliente);




//Inicializar Variables:
const edad = 37
console.log(edad);


//Constante:

const Nacimiento = 2004
console.log(Nacimiento);



// Numeros

const cumple = 1

const actual = ( edad + cumple)

console.log (actual)






// Demo Operadores  

let Numeros = 18
let Dinero = true
// AND (&&)= Se tienen que cumplir las dos condiciones
// OR (||) = Se tiene que cumplir una de las dos condiciones
if (Numeros >= 18 && Dinero == true) {
    console.log("Puede ingresar al bolo");
} else{
    console.log("No puede ingresar al bolo");
}


// Ciclos Por Repeticion:
for (let i = 0; i < 5; i++) {
    console.log("Hola Mundo");
}


// Ciclos Condicionales:

//const contraseña = "1234"
///let contraseñaIngresada = prompt("Ingrese la contraseña");

///while (contraseñaIngresada != contraseña) {
    //contraseñaIngresada = prompt("Ingrese la contraseña");
//}   



// Validacion De Usuario:

const usuarios = [
    { nombre: "Agustin", edad: 21, AceptoTerminos: false },
    { nombre: "Franco" , edad: 21, AceptoTerminos: true },
    { nombre: "Carlos", edad: 18, AceptoTerminos: true },
    { nombre: "Roman", edad: 15, AceptoTerminos:true},
    
]

for (let i= 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >=18 && usuarios[i].AceptoTerminos){
        console.log(usuarios[i].nombre);
    }
    
}

const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("cambiardescuento");

let descuentoinicial;

const descuentopredeterminado = 10;
let descuentoactual = descuentoinicial ?? descuentopredeterminado;
mensaje.textContent = 'El descuento es del $ { descuentoactual }%'

boton.addeventlistener('click', () => {
    let descuentoingresado = prompt("De cuanto queres el descuento..")

    descuentoingresado = Number(descuentoingresado)

    descuentoactual = descuentoingresado ?? descuentopredeterminado

    mensaje.textContent=  'El descuento es del ${descuentoactual}%'

})