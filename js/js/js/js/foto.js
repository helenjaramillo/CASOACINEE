let video =
document.getElementById("video");

async function activarCamara(){

    try{

        let stream =
        await navigator.mediaDevices.getUserMedia({
            video:true
        });

        video.srcObject = stream;

    }catch(error){

        alert(
        "No se pudo acceder a la cámara"
        );

    }
}

function tomarFoto(){

    let canvas =
    document.getElementById("canvas");

    let ctx =
    canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    alert("Foto capturada");

}
