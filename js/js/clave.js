function validarClave(){

    let clave =
    prompt(
        "Ingrese la clave de seguridad"
    );

    if(clave === "CINE"){

        limpiarFormulario();

        return true;

    }

    alert("Clave incorrecta");

    document.getElementById("panel")
    .style.display = "none";

    document.getElementById("login")
    .style.display = "block";

    return false;
}
