
document.addEventListener('deviceready', onDeviceReady, false);

let txtNumeroSorteado = null;
let numeroSorteado = null;
let numeroCard = 0;
let txtNumero = null;
let atualizaNumero = null;

function onDeviceReady() {

    txtNumeroSorteado = document.getElementById('txtNumeroSorteado');
    txtNumero = document.getElementById('txtNumero');
    document.getElementById('btnJogar').addEventListener('click', jogar);
    document.getElementById('btnNumero').addEventListener('click', parar);

}

function parar() {

    clearInterval(atualizaNumero);

    if (numeroCard === numeroSorteado) {
        alert('Parabéns! Você ACERTOU!!!');
    } else {
        alert('Pense mais rápido! Você ERRROU!!!!');
    }

}

function jogar() {
    numeroSorteado = Math.floor(Math.random() * 9) + 1;
    txtNumeroSorteado.innerHTML = numeroSorteado;

    atualizaNumero = setInterval(() => {

        numeroCard = Math.floor(Math.random() * 9) + 1;
        txtNumero.innerHTML = numeroCard;

    }, 2000);
}


