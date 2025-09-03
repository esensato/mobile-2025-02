
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    document.getElementById('tirarfoto').addEventListener('click', tirarFoto);
    StatusBar.hide();
}

function tirarFoto() {

    navigator.camera.getPicture((foto) => {
        document.getElementById('preview').style.backgroundImage = "url('" + foto + "')";

        // envia a imagem no formato base64 para o backend
        cordova.plugin.http.setDataSerializer('json');
        cordova.plugin.http.post('https://backend-s0hl.onrender.com/imagem', {
            imagem: foto
        }, {}, function (response) {
            navigator.notification.alert(
                "Foto enviada: " + response.status, // mensagem
                () => { }, // função acionada quando fechar o diálogo
                'Informações', // título
                'OK' // texto do botão
            );

        }, function (response) {
            alert(response.error);
        });

    }, (erro) => {
        alert(erro);
    }, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

}