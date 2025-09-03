# Cordova

### Softwares Básicos

- [Android Studio](https://developer.android.com/studio)

- [VS Code](https://code.visualstudio.com/download)

- [Nodejs](https://nodejs.org/en/download/)

- [Configurar Disposivito Real Android - USB](https://developer.android.com/codelabs/basic-android-kotlin-compose-connect-device#0)

### Instalação Java e Gradle (Windows)

- Executar os comandos abaixo dentro do *Terminal* do *VS Code*
- Instalar o *Java*

```bash
mkdir c:\mobile\java
cd c:\mobile\java 
curl -LO https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_windows-x64_bin.zip
tar -xvf openjdk-17.0.2_windows-x64_bin.zip

openjdk version "11" 2018-09-25
OpenJDK Runtime Environment 18.9 (build 11+28)
OpenJDK 64-Bit Server VM 18.9 (build 11+28, mixed mode)
```
- Instalar o *Gradle*
```
mkdir c:\mobile\gradle
cd c:\mobile\gradle 
curl -LO https://services.gradle.org/distributions/gradle-8.12.1-bin.zip
tar -xvf gradle-8.12.1-bin.zip
```
- Configurar a variável de ambiente `PATH`
```
setx PATH "C:\mobile\java\jdk-11\bin;C:\mobile\gradle\gradle-8.12.1\bin;%PATH%" 
```
- Reiniciar o *VS Code*
- Verificar as instalações
```
java -version

gradle -v
```
### Instalação Completa Mac

- Abrir um **Terminal**

<img src="img/mac-terminal.png" width="600" height="200">

- Criar uma pasta `mobile/software`:
    - `cd ~`
    - `mkdir mobile`
    - `cd mobile`
    - `mkdir software`
    - `cd software`

- Efetuar o download do **Java 11 para Mac**
    - `curl https://download.java.net/java/ga/jdk11/openjdk-11_osx-x64_bin.tar.gz --output openjdk-11_osx-x64_bin.tar.gz`

- Descompactar o arquivo
    - `tar xvf openjdk-11_osx-x64_bin.tar.gz`

- Remover o zip
    - `rm openjdk-11_osx-x64_bin.tar.gz`

- Adicionar o **JAVA_HOME** no *profile*
    - `echo "export JAVA_HOME=~/mobile/software/jdk-11.jdk/Contents/Home" >> ~/.zshrc`

- Efetuar o download do **Gradle**
    - `https://services.gradle.org/distributions/gradle-8.0.2-bin.zip`

- Salvar na pasta `mobile/software`

- Descompactar o arquivo
    - `unzip gradle-8.0.2-bin.zip`

- Remover o zip
    - `rm  gradle-8.0.2-bin.zip`

- Adicionar o **Gradle** ao `PATH`
    - `echo "export PATH=$PATH:~/mobile/software/gradle-8.0.2/bin" >> ~/.zshrc`

- Verificar a versão do Java no **Gradle** abrindo um novo terminal dentro do **VS Code**

<img src="img/gradle-mac.png" width="600" height="300">

### Problema Dimensão AVD Windows

- [Vide](https://stackoverflow.com/questions/44013216/android-emulator-screen-size-not-the-same-as-device-frame)

### Executar AVD
- Dentro do `Terminal` do **VS Code** ou **Command Prompt** (Windows):
```bash
cd %LOCALAPPDATA%\Android\Sdk
cd emulator
emulator -list-avds
emulator -avd <nome_do_avd>
```
- Verificar se existe um dispositivo físico conectado
```bash
cd %LOCALAPPDATA%\Android\Sdk\platform-tools
adb devices -l
```
- O diretório do **Android SDK** no **Mac** é o `~/Library/Android/sdk/`

### Instalação Cordova

`npm install -g cordova`

`cordova -v`

<img src="img/cordova-1.png" width="800" height="200">

***
### App Exemplo
- Iniciar o emulador em primeiro lugar (pelo *Android Studio* ou linha de comando)
- Executar os comandos abaixo
```bash
cordova create alo-cordova alo.cordova AloCordova
cd alo-cordova
cordova platform add android
cordova run android
```
### Eventos
- Criar um botão no `index.html`:
```html
<button id = "msg">Clique Aqui</button>
```
- Editar o arquivo `index.js`
```javascript
document.getElementById("msg").addEventListener("click", exibirMensagem); 

let exibirMensagem = () => {
    alert('Olá');
}
```
- Exibir a mensagem dentro de um `<div>` incluir no `index.html`
```html
<div class="app">
    <h1>Alô Cordova</h1>
    <div id="deviceready">
        <button id = "msg">Clique Aqui</button>
    </div>
    <div id="conteudo"></div>
</div>
```
- Alterar a função dentro de `index.js`
```javascript
let exibirMensagem = () => {
    document.getElementById("conteudo").innerHTML = 'Olá';
}
```
#### Entrada de Dados
- Criar uma caixa de texto
```html
<div id="form"><input type="text" id="texto"></div>
```
- Obter o texto digitado
```javascript
let exibirMensagem = () => {
    let txt = document.getElementById("texto").value;
    document.getElementById("conteudo").innerHTML = txt;
}
```
- Obs: para manter o posicionamento da interface ao abrir o teclado, ajustar o arquivo `AndroidManifest.xml` e incluir a propriedade `android:windowSoftInputMode="adjustPan"` na tag `<activity>`
### Estilos
- Estilos podem ser editados na pasta `css`, por exemplo, o `index.css`
```css
.app {
    display: flex;
    flex-direction: column;
    width:100%
}
```
***
### App Pensa Rápido
- Iniciar o emulador em primeiro lugar (pelo *Android Studio* ou linha de comando)
- Criar o projeto, acessar a pasta, adicionar a plataforma *android* e executar
```bash
cordova create pensa-rapido pensa.rapido PensaRapido
cd pensa-rapido
cordova platform add android
cordova run android
```
- Definir a folha de estilos com o modelo abaixo
```css
html,
body {
    height: 100vh;
    margin: 0;
    padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f2f4f8;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.card {
    width: 80vmin;
    height: 120vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.card-menor {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 100px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    margin-bottom: 5px;
}

.button {
    width: 80vmin;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    margin-bottom: 50px;
}

.button:active {
    background: #45a049;
}

.digit {
    font-size: 50vmin;
    line-height: 1;
    font-weight: bold;
    color: #222;
}

.digit-menor {
    font-size: 36px;
    line-height: 1;
    font-weight: bold;
    color: #222;
}

.text {
    font-size: 16px;
    line-height: 1;
    font-weight: bold;
    color: #222;
}
```
- A página HTML deverá ser definida conforme o código abaixo
```html
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">

    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
    <meta name="color-scheme" content="light dark">
    <link rel="stylesheet" href="css/index.css">
    <title>Pensa Rápido</title>
</head>

<body>
    <div class="card-menor">
        <div class="digit-menor" id="txtNumeroSorteado"></div>
    </div>
    <div class="button" id="btnJogar">
        <div class="text">Jogar</div>
    </div>
    <div class="card" id="btnNumero">
        <div class="digit" id="txtNumero"></div>
    </div>
    <script src="cordova.js"></script>
    <script src="js/index.js"></script>
</body>

</html>
```
- Finalmente, a lógica de negócio implementada no *javascript*
```javascript
document.addEventListener('deviceready', onDeviceReady, false);

let txtNumero = null;
let atualizaNumero = null;
let numeroSorteado = 0;
let numeroCard = 0;

function onDeviceReady() {

    document.getElementById('btnJogar').addEventListener('click', jogar);
    document.getElementById('btnNumero').addEventListener('click', parar);
    txtNumero = document.getElementById('txtNumero');
    txtNumeroSorteado = document.getElementById('txtNumeroSorteado');
}

const parar = () => {
    clearInterval(atualizaNumero);

    if (numeroCard === numeroSorteado) {
        alert('Você Acertou!')
    } else {
        alert('Você Errou!')
    }
}

const atualizar = () => {

    numeroCard = Math.floor(Math.random() * 9);
    txtNumero.innerHTML = numeroCard;
}

const jogar = () => {

    txtNumero.innerHTML = '';
    atualizaNumero = setInterval(atualizar, 1000);
    numeroSorteado = Math.floor(Math.random() * 9);
    txtNumeroSorteado.innerHTML = numeroSorteado;

}
```
***
### App Sistema de Pedidos de Pizza
- Criar um app para efetuar o pedido de pizza
- Interface para exibir o cardápio
```html
<body>
    <div class="container">
        <div class="cardapio">
            <button id="btnEsquerda" class="seta esquerda">&#9664;</button>
            <img id="imagem" src="pizza.png" alt="Pizza" class="pizza-img">
            <button id="btnDireita" class="seta direita">&#9654;</button>
        </div>

        <div class="info">
            <h2 class="pizza-nome" id="pizza">Pizza Margherita</h2>
            <p class="pizza-preco" id="preco">R$ 39,90</p>

            <label for="qtde">Quantidade:</label>
            <select id="qtde" class="qtd">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button class="btn">Enviar Pedido</button>
        </div>
    </div>
    <script src="cordova.js"></script>
    <script src="js/index.js"></script>
</body>
```
- Folha de estilo
```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
    width: 90%;
    max-width: 400px;
}

.cardapio {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.seta {
  background: none;
  border: none;
  color: #ff7043;
  font-size: 32px;
  cursor: pointer;
  padding: 0;
}

.pizza-img {
    width: 150px;
    height: 150px;
    margin: 0 15px;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    object-fit: cover;
}

.info {
    background: #fff8f0;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pizza-nome {
    margin: 10px 0 5px;
    color: #d84315;
}

.pizza-desc {
    font-size: 14px;
    color: #555;
}

.pizza-preco {
    font-weight: bold;
    margin: 8px 0;
    color: #2e7d32;
}

.qtd {
    margin: 10px 0;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

.btn {
    display: block;
    width: 100%;
    background: #ff7043;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

.btn:hover {
    background: #e64a19;
}
```
#### Imagens Externas

- Alterar em `index.html` a diretiva de segurança `img-src`:

```html
<meta http-equiv="Content-Security-Policy" 
content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src * data: content:;">
```
#### Lógica do Negócio

- Criação das variáveis para referenciar os elementos da interface

```javascript
const itensCardapio = [{pizza: "Calabresa", preco: "R$ 25,00", imagem: "../img/pizza.jpg"},
{pizza: "Quatro Queijos", preco: "R$ 35,00", imagem: "../img/pizza.jpg"}];

var idItem = 0;
var qtde;
var preco;
var imagem;
var pizza;
```
- Referenciar os elementos da interface

```javascript
qtde = document.getElementById('qtde');
preco = document.getElementById('preco');
imagem = document.getElementById('imagem');
pizza = document.getElementById('pizza');
```
- Criar uma função para atualizar a interface e chamá-la no `onDeviceReady`
```javascript
const atualizarInterface = () => {
    pizza.innerHTML = itensCardapio[idItem].pizza;
    preco.innerHTML = itensCardapio[idItem].preco;
    imagem.src = itensCardapio[idItem].imagem;
}
```
- Mover para a direita

```javascript
const direita = () => {
    if (idItem < itensCardapio.length) {
        idItem++;
    }
    atualizarInterface();
}
```

- Mover para a esquerda

```javascript
const esquerda = () => {
    if (idItem > 0) {
        idItem--;
    }
    atualizarInterface();
}
```
- Atualizar os eventos dos botões para alterar o cardário
```javascript
document.getElementById('btnEsquerda').addEventListener('click', esquerda);
document.getElementById('btnDireita').addEventListener('click', direita);
```
- Enviar dados

```javascript
const enviar = () => {
    alert (endereco.value + " - " + itensCardapio[idItem].pizza + " - " + qtde.value); 
}
```

#### Requisições HTTP

- Instalar o plugin `cordova plugin add cordova-plugin-advanced-http`

- Alterar em `index.html` a diretiva de segurança `default-src`:

```html
<meta http-equiv="Content-Security-Policy" 
content="default-src * data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src * data: content:;">
```

- Executando **GET**

```javascript
const request = () => {
    cordova.plugin.http.get('https://backend-s0hl.onrender.com/ping', {
}, {}, function(response) {
  // para converter a resposta em JSON
  console.log(JSON.parse(response.data));
  alert(response.data);
}, function(response) {
  alert(response.error);
});

}
```
- Executando **POST**
```javascript
cordova.plugin.http.setDataSerializer('json');
cordova.plugin.http.post('https://backend-s0hl.onrender.com/', {
  pizza: "Atum com Queijo", quantidade: 1, endereco: "Rua das Rosas, 123"
}, {}, function(response) {
  alert(response.status);
}, function(response) {
  alert(response.error);
});
```
- Conferir os pedidos realizados:
```bash
https://backend-s0hl.onrender.com/
```
#### Exercícios

- Atuaizar o POST para enviar os dados preenchidos pelo usuário
- Obter o caradápio dinamicamente efetuando um GET no endpoint e atualizando os dados no app ao invés de utilizar a variável *hardcoded* `itensCardapio`
```bash
https://backend-s0hl.onrender.com/pizzas
```
***
### Plugins

- Mecanismos de extensão da plataforma - vide [Referência](https://cordova.apache.org/docs/en/latest/#plugins)

#### Bateria

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-battery-status`

- Registrar o evento
    ```javascript
    window.addEventListener("batterystatus", onBatteryStatus, false);

    window.addEventListener("batterylow", onBatteryStatus, false);

    window.addEventListener("batterycritical", onBatteryStatus, false);
    ```
- Implementar o tratamento do evento
    ```javascript
    function onBatteryStatus(status) {
        alert("Nível: " + status.level);
    }
    ```
#### Informações do Dispositivo

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-device`

- Permite o acesso a diversas informações sobre o dispositivo
    - device.cordova
    - device.model
    - device.platform
    - device.uuid
    - device.version
    - device.manufacturer
    - device.isVirtual
    - device.serial
    - device.sdkVersion (Android)
- Obter informações
    ```javascript
    function info() {
        alert("Plataforma: " + device.platform);
    }
    ```
#### Rede

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-network-information`

- Registrar o evento
    ```javascript
    document.addEventListener("offline", redeOff, false);

    document.addEventListener("online", redeOn, false);
    ```
- Implementar o tratamento do evento
    ```javascript
    function redeOff() {
        alert("Sem internet: " + navigator.connection.type);
    }
    
    function redeOn() {
        alert("Com internet: " + navigator.connection.type);
    }
    ```
#### Status Bar

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-statusbar`

- Exibir / ocultar *status bar*
    ```javascript
    StatusBar.show();
    StatusBar.hide();
    ```
#### Caixas de Diálogo

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-dialogs`

- Exibir a caixa de ciálogo
    ```javascript
    function info() {
    
        navigator.notification.alert(
            "Plataforma: " + device.cordova, // mensagem
            fecharAlerta(), // função acionada quando fechar o diálogo
            'Informações', // título
            'OK' // texto do botão
        );
    }
    
    function fecharAlerta() {
    
    }
    ```
#### GPS

- Instalar o *plugin*:

    `cordova plugin add cordova-plugin-geolocation`

- Obter as coordenadas atuais
    ```javascript
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
    ```
- Impelentar as funções de captura e erro (opcional)
    ```javascript
    function geoOK(posicao) {
        alert("lat x long: " + posicao.coords.latitude + " x " + posicao.coords.longitude);
    }
    
    function geoError(err) {
        alert("Erro" + err);
    }
    ```
- Obter previsão do tempo 
 
`http://api.openweathermap.org/data/2.5/weather?lat='+ latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial'`
#### Persistência com Local Storage
- Utilizar o *local storage* disponível em qualquer navegador
    ```javascript
    var storage = window.localStorage;
    var value = storage.getItem(key);
    storage.setItem(key, value);
    storage.removeItem(key);
    ```
    
#### Câmera

- Criar um novo projeto

    `cordova create foto tirar.foto FotoApp`

- Entrar no diretório do projeto

    `cd foto`

- Instalar o plugin:

    `cordova plugin add cordova-plugin-camera`

- Adicionar a plataforma

    `cordova platform add android`

- CSS
```css
body {
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    background-color:#E4E4E4;
    font-family: system-ui, -apple-system, -apple-system-font, 'Segoe UI', 'Roboto', sans-serif;
    font-size:12px;
    height:100vh;
    margin:0px;
    padding:0px;
    padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
    width:100%;
}

.app {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width:99%;
    height: 95%
}

.preview {
    flex: 5;
    border: solid;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.botao {
    flex: 1;

}

.tirar {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
}
```
- Incluir um botão para acionar a câmera e o local para exibir a imagem
```html
<div class="app">
    <div class="preview" id="preview"></div>
    <div class="botao"><button class="tirar" id="tirarfoto">Tirar Foto</button></div>
</div>
```
- Registrar o evento de `click` no botão que vai acionar a câmera
```javascript
document.getElementById('tirarfoto').addEventListener('click', tirarFoto);
```
- Definir a função para efetuar a captura da imagem e exibir no `preview`
```javascript
const tirarFoto = () => {
    navigator.camera.getPicture(onSuccess, onFail, {  
        quality: 50, 
        destinationType: Camera.DestinationType.DATA_URL 
    });  
    
    function onSuccess(imageData) { 
        document.getElementById('preview').style.backgroundImage = "url('" + imageData + "')"; 
    }  
    
    function onFail(message) { 
        alert('Failed because: ' + message); 
    } 
```
- Exemplo para envio a um endpoint via POST:
```javascript
const enviarFoto = (dadoImagem) => {

cordova.plugin.http.setDataSerializer('json');
cordova.plugin.http.post('https://backend-s0hl.onrender.com/imagem', {
imagem: dadoImagem
}, {}, function(response) {
alert(response.status);
}, function(response) {
alert(response.error);
});
}
```
- Conferir as imagens em `https://backend-s0hl.onrender.com/imagem`

#### Splash Screen
- Incluir as configurações abaixo no `config.xml`
```xml
<platform name="android">
    <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/pizzaria.png" />
</platform>

<preference name="SplashScreenDelay" value="3000" />
```
#### Integração com Bootstrap e JQuery
- Criar um novo projeto para teste
```bash
cordova create bootstrap-jquery bootstrap.jquery BootstrapJQuery
cd bootstrap-jquery
cordova platform add android
```
- Efetuar o [Download do bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/)
- Efetuar o [Download do jquery](https://jquery.com/download/)
- Exemplos de [Componentes Bootstrap](https://getbootstrap.com/docs/5.3/examples/#snippets)
- Copiar os arquivos do `jquery` e `bootstrap` para a pasta `js` e `css` do projeto
- Alterar o `index.html` para incluir os arquivos no *head* e no final antes do `</body>`
```javascript
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <script src="cordova.js"></script>
    <script src="js/index.js"></script>
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
```
- Exemplo utilizando *card* e *pagination*
```html
<div class="container">

    <div class="card mt-4" style="width: 100%;">
        <img src="img/logo.png" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title" id="card-title">Pizza Atum</h5>
            <p class="card-text" id="card-text">Preço: R$ 55,00</p>
            <a href="#" class="btn btn-primary rounded-pill" id="adicionar">Adicionar Pedido</a>
        </div>
    </div>

    <nav aria-label="Page navigation example" class="mt-4">
        <ul class="pagination justify-content-center" id="pagination">

        </ul>
    </nav>

</div>
```
- Adicionar itens de paginação dinamicamente
```javascript
function criaPaginacao() {
    let $pagination = $("#pagination");
    $pagination.empty();

    for (let i = 1; i <= 10; i++) {
        let pageItem = `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        console.log(pageItem);
        $pagination.append(pageItem);
    }
}
```
- Obter a página selecionada e trocar o conteúdo exibido no cardápio (incluir no `onDeviceReady`)
```javascript
$(document).on("click", ".page-link", function (event) {
    event.preventDefault();
    currentPage = parseInt($(this).data("page"));
    $("#card-title").text("Pizza Marguerita");
    $("#card-text").text("R$ 45,00");
});
criaPaginacao();
```
### Build do App
- Para gerar o arquivo de instalação do app (no caso do *Android* um *apk*)
```bash
cordova build android --release -- --packageType=apk
```
