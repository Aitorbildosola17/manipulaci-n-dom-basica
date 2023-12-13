const choices = ["piedra", "papel", "tijeras"];
const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
const userChoice = prompt("piedra, papel, o tijeras?");
if (userChoice === cpuChoice) {
  alert("Empate");
} else if (userChoice === "piedra" && cpuChoice === "papel") {
  alert("Perdiste");
} else if (userChoice === "piedra" && cpuChoice === "tijeras") {
  alert("Ganaste")
} else if (userChoice === "papel" && cpuChoice === "piedra") {
  alert("Ganaste")
} else if (userChoice === "papel" && cpuChoice === "tijeras") {
  alert("Perdiste");
} else if (userChoice === "tijeras" && cpuChoice === "piedra") {
  alert("Perdiste");
} else if (userChoice === "tijeras" && cpuChoice === "papel") {
  alert("Ganaste")
}
