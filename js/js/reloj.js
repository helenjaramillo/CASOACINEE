function mostrarReloj(callback){

    let resultado =
    document.getElementById("resultado");

    let contador = 3;

    resultado.innerHTML =
    "⏳ Calculando... " + contador;

    let intervalo = setInterval(() => {

        contador--;

        resultado.innerHTML =
        "⏳ Calculando... " + contador;

        if(contador <= 0){

            clearInterval(intervalo);

            callback();

        }

    },1000);

}
