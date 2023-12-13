const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');

//los parametros del addEventListener son el evento que quieras que escuche y lo que quieres que haga cuando el evento sea ejecutado
btn.addEventListener(evento, btnOnclick)

function btnOnclick () {
    console.log(parseFloat(input1.value + input2.value));
}