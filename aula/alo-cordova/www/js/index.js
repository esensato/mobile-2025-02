document.addEventListener('deviceready', onDeviceReady, false);

let mensagem = null;
let msgInformada = null;

function onDeviceReady() {

    document.getElementById('exibeMensagem').addEventListener('click', exibirMensagem)
    mensagem = document.getElementById('mensagem')
    msgInformada = document.getElementById('msgInformada')

}

function exibirMensagem() {
    mensagem.innerHTML = msgInformada.value
}