document.addEventListener('deviceready', onDeviceReady, false);

let itensCardapio = null;

var idItem = 0;

let imagem = null;
let pizza = null;
let preco = null;
let qtde = null;
let btnEnviar = null;

function onDeviceReady() {

    imagem = document.getElementById('imagem');
    pizza = document.getElementById('pizza');
    preco = document.getElementById('preco');
    qtde = document.getElementById('qtde');
    btnEnviar = document.getElementById('btnEnviar');

    document.getElementById('btnEsquerda').addEventListener('click', esquerda);
    document.getElementById('btnDireita').addEventListener('click', direita);
    btnEnviar.addEventListener('click', enviar);

    ping();
}

function ping() {

    cordova.plugin.http.get('https://backend-s0hl.onrender.com/ping',
        {},
        {},
        (resposta) => {
            if (resposta.status === 200) {
                carregarCardapio();
            }
        },
        (erro) => {
            alert(JSON.parse(erro.status));
        }
    );

}

function carregarCardapio() {

    cordova.plugin.http.get('https://backend-s0hl.onrender.com/pizzas',
        {},
        {},
        (resposta) => {
            if (resposta.status === 200) {
                btnEnviar.innerHTML = 'Enviar Pedido';
                itensCardapio = JSON.parse(resposta.data);
                atualizar()
            }
        },
        (erro) => {
            alert(JSON.parse(erro.status));
        }
    );

}

function atualizar() {
    const pizzaAtual = itensCardapio[idItem];
    imagem.src = pizzaAtual.imagem;
    pizza.innerHTML = pizzaAtual.pizza;
    preco.innerHTML = pizzaAtual.preco;
}

function esquerda() {

    if (idItem > 0) {
        idItem--;
        atualizar()
    }

}

function direita() {

    if (idItem < itensCardapio.length) {
        idItem++;
        atualizar()
    }
}

function enviar() {

    // corpo da requisição está no formato JSON
    cordova.plugin.http.setDataSerializer('json');

    const pizzaAtual = itensCardapio[idItem];

    cordova.plugin.http.post('https://backend-s0hl.onrender.com/', {
        pizza: pizzaAtual.pizza, quantidade: qtde.value, endereco: ""
    }, {}, function (response) {
        alert(response.status + ' - Pedido enviado!');
    }, function (response) {
        alert(response.error);
    });
}