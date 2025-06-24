// EL DOM es un interfaz de progamcion para documentos HTML y XML. Representa la estructura de un documento como un arbol de nodos, donde cada nodo corresponde a una parte del documento.
// Permite a los lenguajes de progamacion , como JS, interactuar y manipular la estructura , el estilo y contenido.
// Estrucutra del DOM:
// -Nodo Raiz: El nodo mas alto del arbol, es el nodo DOCUMENT.
// -Nodo Elemento: Cada etiqueta HTML es un nodo elemento.
// -Nodo Texto: Contenido de un nodo elemento.
// -Nodo Atributo: Los atributos de las estiquetas HTML, ej: class y id.
// -Nodo Comentario: Los comentarios en el HTML.

// ACCEDIENDO AL DOM
// El metodo getElementById() se utiliza pra acceder a un unico elemento del DOM que tiene un atrbuto id especifico.
let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);


// El metodo getElementsByClassName() se usa para obtener todos los elementos que tienen una clase especifica.
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);

// El metodo getElementsByTagName() permite acceder a todos los elementos del DOM que tienen nombre de estiqueta especifico.
let contenedor = document.getElementsByTagName("p");
console.log(contenedor[0].innerHTML);


// Acceso Moderno al DOM:
// El metodo queryselector() permite seleccionar el primer elemento del DOM que coincida con uno o mas selectores CSS.
let random = document.querySelector(".paises");
console.log(random.innerHTML);

// El metodo querySelectorAll() permite seleccionar todos los elementos del DOM que coincidan con uno o mas selectores CSS.
let todosPaises = document.querySelectorAll("p");
console.log(todosPaises[1].innerHTML);

// Modificando el DOM:
// innerHTML: permite leer o modificar el contenido HTML interno de un elemenrto.
let contenedor1 = document.getElementById("parrafo1");
contenedor1.innerHTML = '<p>Hola, soy un nuevo parrafo</p>';

//innerText Y textContent: permiten leer o modificar el texto dentro de un  nodo.
let titulo = document.getElementById("nuevo");
titulo.innerText = 'Hola, te cambie';
titulo.textContent = 'Hola, te cambie de nuevo';

//setAttribute(): permite modificar o establecer un nuevo atributo a un elemento.
let enlace = document.querySelector("a");
enlace.setAttribute('href', 'https://youtube.com');

//Añadir Nodos al DOM:
// createElement(): crea un nuevo nodo elemento.
let nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = '<h3>Hola, te acabo de crear</h3>';
document.body.appendChild( nuevoDiv);

// appendChild(): permite añadir un nuevo nodo como hijo de un nodo padre.
let lista = document.getElementById("video");
let nuevoElemento = document.createElement('li');
nuevoElemento.innerHTML = 'Nuevo Elemento';
lista.appendChild(nuevoElemento);

// insertBefore(): inserta un nodo antes de un hijo especifico.
// ¡¡¡¡¡PREGUNATARLE AL PROFESOR COMO SE HACE!!!!!!

//Eliminar Nodos Del DOM:
// removeChild(): elimina un nodo hijo de un elemento.
let eliminar = document.getElementById("video");
lista.remove();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Plantillas Literales e Interactividad:
// Permite la creacion de cadenas de texto mas dinamicas y flexibles.

const nombre = "Juan";
const edad = 30;

const contenedor2  = document.getElementById("info");

contenedor.innerHTML = `
<h2>Información del Usuario</h2>
<p>Nombre: ${nombre}</p>
<p>Edad: ${edad}</p>
`;
// Pregunatarle al profesor como hacer que el contenido se actualice automaticamente al cambiar las variables.

