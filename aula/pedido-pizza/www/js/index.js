document.addEventListener('deviceready', onDeviceReady, false);

const itensCardapio = [{ pizza: "Calabresa", preco: "R$ 25,00", imagem: "../img/logo.png" },
{ pizza: "Quatro Queijos", preco: "R$ 35,00", imagem: "../img/pizza.png" }];

var idItem = 0;

let imagem = null;
let pizza = null;
let preco = null;
let qtde = null;

function onDeviceReady() {

    imagem = document.getElementById('imagem');
    pizza = document.getElementById('pizza');
    preco = document.getElementById('preco');
    qtde = document.getElementById('qtde');

    document.getElementById('btnEsquerda').addEventListener('click', esquerda);
    document.getElementById('btnDireita').addEventListener('click', direita);
    document.getElementById('btnEnviar').addEventListener('click', enviar);

    atualizar();
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

function enviar() { }