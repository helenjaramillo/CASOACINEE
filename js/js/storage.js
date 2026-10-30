function guardarVentas(){

    localStorage.setItem(
        "ventas",
        JSON.stringify(ventas)
    );

}

function cargarVentas(){

    let datos =
    localStorage.getItem("ventas");

    if(datos){

        ventas =
        JSON.parse(datos);

        actualizarGrafica();
    }
}
