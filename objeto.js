var miAuto = {
    marca:"toyota",
    modelo: "sw4",
    annio: 1998,
    detallesDelAuto: function () {
        console.log('Auto ${this.modelo} ${this.annio}' );
    }
};

//funcion constructora
var marca = [
    "Toyota",
    "Mercedes",
    "BMW",
    "Ferrari",
    "Lamborgini",
    "Volksvagen"
]

var modelo = [
    "Supra",
    "365i",
    "M5",
    "F40",
    "Diablo",
    "Golf Gti"

]

var annio = [
    "1998",
    "2021",
    "2019",
    "2005",
    "2017",
    "2022"
]

function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
for (var i = 0; marca.length > i && modelo.length > i && annio.length > i; i++){
    var nuevoAuto = new auto(marca[i], modelo[i], annio[i]);
    console.log(nuevoAuto
    );
}
