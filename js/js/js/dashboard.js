let totalVentas = 0;
let totalBoletas = 0;
let funciones = 0;

function actualizarDashboard(
    boletas,
    total
){

    totalVentas += total;
    totalBoletas += boletas;
    funciones++;

    document.getElementById("ingresos")
    .innerHTML =
    "$" + totalVentas;

    document.getElementById("boletasTotal")
    .innerHTML =
    totalBoletas;

    document.getElementById("funciones")
    .innerHTML =
    funciones;

}
