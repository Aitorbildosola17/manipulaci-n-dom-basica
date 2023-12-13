var pregunta = prompt("Piedra, Papel o Tijera");
var usuario = pregunta.toLowerCase();
var opciones = ["piedra", "papel", "tijera"];
var computadora = opciones[Math.floor(Math.random * opciones.length)];//length devuelve el numero de elementos dentro del array o variable 
switch(true){
    case (usuario === computadora):
    alert("Es un empate");
    break;
    case (usuario === 'tijera' && computadora === 'papel'):
    alert("Ganaste");
    break;
    case(usuario === 'tijera' && computadora === 'piedra'):
    alert("Perdiste");
    break;
    case (usuario === 'piedra' && computadora === 'papel'):
        alert("Perdiste");
    break;
    case(usuario === 'piedra' && computadora === 'tijera'):
    alert("Ganaste");
    break;
    case (usuario === 'papel' && computadora === 'tijera'):
    alert ("Perdiste");
    break;
    case (usuario === 'papel' && computadora === 'piedra'):
    alert("Ganaste");
}