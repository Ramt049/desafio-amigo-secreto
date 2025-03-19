//variables
const inputAmigo = document.getElementById("amigo");
// aqui se guardan los nombres de los amigos, declarando la variable
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// amigos que participan en le sorteo, llamando tambien el boton añadir del HTML
function agregarAmigo() {
  //alerta para que se ingrese un valor en la caja, que no quede vacía y poder continuar
  if (!inputAmigo.value) {
    alert("Para continuar debes ingresar el nombre de tu amigo");
    return;
  } 
listaAmigos.push(inputAmigo.value);
//ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; la siguiente es una acortación de la función, incluyendo el uso de template strings
ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
limpiarCaja ();
return;
};
// Esta funcion nos ayuda a limpiar la caja luego de ingresar un nombre
function limpiarCaja(){
  // llamar caja con id queryselector
  document.getElementById("amigo").value = "";
};

for (let i = 0; i < listaAmigos.length; i++) {
  const li = document.createElement("li"); 
  li.textContent = listaAmigos[i];
  ulListaAmigos.appendChild(li); 
}

// se asigna la funcion de sortear y se habilita el boton de sorteo del HTML
function sortearAmigo() {
  // la propiedad length contabiliza los elementos que hay en la lista de amigos que ya es una constante declarada, en conjunto con la funcion math.ramdon nos permite sortear de manera aletoria un elemento ya existen de la lista de amigos
  const random = Math.floor((Math.random ()*listaAmigos.length));
  // Aqui se realiza el sorteo del amigo secreto, se declara la constante de amigoSecreto
  const amigoSecreto = listaAmigos[random];
  //Nuevamente se usa el recurso del template string para dar el resultado por medio de una constante ya declarada
  ulResultado.innerHTML = `<li> El amigo secreto que te ha tocado es : ${amigoSecreto}</li>`;
  return;
};