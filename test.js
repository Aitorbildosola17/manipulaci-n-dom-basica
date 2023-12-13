//VARIABLES Y OPERACIONES 
let nombre = "Aitor";
let apellido = "Bildosola";
let nombreUsuario = "AitorB17";
let edad = 20;
let correoElectronico = "aitorbildosolacan@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 700000;
let deudas = 56000;

let = nombre + ' ' + apellido;
let = dineroAhorrado - ' ' - deudas;

//FUNCIONES  Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const nombre2 = "Juan David";
const apellido2 = "Castro Gallego";
const nombreCompleto = nombre2 + apellido2;
const apodo = "juandc";

function mostrarDatos(nombre2, apellido2, apodo){
    return console.log('Mi nombre es + ${nombre2} + ${apellido2} pero me gusta que me digan + ${apodo}');
}
mostrarDatos(Aitor, Bildosola, Tor);

//CONDICIONALES Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion1 = "Basic";

switch (tipoDeSuscripcion1) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
//Mi respuesta 

{const tipoDeSuscripcion2 = "Basic";

if (tipoDeSuscripcion2 == "Free")
       {console.log("Solo puedes tomar los cursos gratis");}
   else if (tipoDeSuscripcion2 == "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");}
    else if (tipoDeSuscripcion2 == "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");}
    else if (tipoDeSuscripcion2 == "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");}
    else {console.log("Lo siento, no tienes ninguna suscripcion")}   
    }


    let tipoSuscripcion = [
        "Free",
        "Basic",
        "Expert",
        "ExpertPlus",
    ];
    let infoSuscripcion = [
        "Solo puedes tomar los cursos gratis",
        "Puedes tomar casi todos los cursos de Platzi durante un mes",
        "Puedes tomar casi todos los cursos de Platzi durante un año ",
        "Tu y alguien mas pueden tomar Todos los cursos de platzi durante un año",
    ];
    let suscriptor = "expert";
    for (let i = 0; i < tipoSuscripcion.length; i++){
        if (suscriptor == tipoSuscripcion[i]){
            console.log('Si estas suscripto al plan ${tipoSuscripcion[i]} en el cual ${infoSuscripcion[i]}')
        }
    }

    //CICLOS
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }
    //Solucion
    let i = 0
    while (i < 5){i++;
        console.log('El valor de i es: ${+i}')
    }
    i = 10;
    while (i > 2){i--
        console.log('El valor de i es: ${i}')
    }
    
    //CODIGO QUE PREGUNTE CUANTO ES 2 + 2 Y QUE TE FELICITE SI ACERTAS

    let pregunta = parseFloat(prompt("Cuanto es 2 + 2"));
    if (pregunta == 4){
        console.log("Felicitaciones sos un genio matematico");
    }
    //ARRAYS Y OBJETOS
    var frutas = [
        "Pera",
        "Manzana",
        "Sandia",
        "Naranja",
    ];
    function primerObjeto(array){
        console.log(array[0])
    }
    primerObjeto(frutas);

    //Que imprima todos los valores, uno por uno, no se vale imprimir el array completo

    let marcas = [
        "Nike",
        "Adidas",
        "Under Armour",
        "Puma"
    ];
    for (let i = 0; i < marcas.length; i++){
        console.log(marcas[i])
    }

    //Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
    var camioneta = {
        marca: "Toyota",
        modelo: "SW4",
        año: "1997",
    }
    function imprimirObj (objeto){
        for(let key in objeto){
        console.log(objeto[key])}
    }
    imprimirObj (camioneta);