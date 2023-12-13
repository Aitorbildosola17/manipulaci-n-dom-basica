var articulos = [
    {nombre:"bici", costo:"2000"},
    {nombre:"celular", costo:"12000"},
    {nombre:"computadora", costo:"50000"},
    {nombre:"reloj", costo:"10000"},
    {nombre:"zapatillas", costo:"30000"},
];
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
var nombreArticulos  = articulos.map(function(articulo){
    return articulo.nombre
});