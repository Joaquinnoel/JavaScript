//Funcion Constructora: Es una funcion que se utiliza pra inicializar un nuevo objeto
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.eedad = edad;
    this.calle = calle;
    this.describir = function(){
        return "Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}";

    }
}

let persona1 = new Persona("Joaquin", 21, "Argerich 1844");
console.log(persona1);


//LocalStorage: Permite almacenar datos de forma indefinida hasta que sean explicitamente eliminados por el usuario o por el sitio web que los guardo.
//SessionStorage: Los datos se eliminan cuando se cierra la pestaña del navegador.
const saludo = document.getElementById("saludo");
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");

botonGuardar.addEventListener("click", ()=>{
    const nombre = prompt("Ingrese su nombre:");
    if(nombre){
        localStorage.setItem("nombreUsuario", nombre)
        saludo.textContent = `Hola, ${nombre}! Bienvenido a nuestra página.`;
    
    }
})

botonEliminar.addEventListener("click", ()=>{
    
    localStorage.removeItem("nombreUsuario")
    saludo.textContent = "HOLA, visitante! Bienvenido a nuestra página.";
    
    }
)

const nombreGuardado = localStorage.getItem("nombreUsuario");
if(nombreGuardado){
    saludo.textContent = `Hola, ${nombreGuardado}! Bienvenido a nuestra página.`;
}

//JSON: (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer para humanos y máquinas. Se utiliza comúnmente para transmitir datos entre un servidor y una aplicación web como texto.
const usuario = {
    id: "1234",
    nombre: "Joaquin",
    correo:"joaquin@example.com",
};
//Convertir objeto a JSON
localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioAlmacenado = 
JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioAlmacenado);