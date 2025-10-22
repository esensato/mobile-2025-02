import 'dart:io';
import 'dart:math';
import 'package:black_jack/Carta.dart';
import 'package:black_jack/Jogador.dart';

const COPAS = '\u2665';
const ESPADAS = '\u2660';
const OURO = '\u2666';
const PAUS = '\u2663';

var jogador_pessoa;

var cartas = <Carta>[];

var cartasMesa = <Carta>[];

void inicio() {

  print('### Black Jack ###');
  print('Informe o seu nome:');
  String? nomeJogador = stdin.readLineSync();
  jogador_pessoa = Jogador(nome: nomeJogador ?? "");
  print('Bem vindo: $jogador_pessoa');

}

void aposta(Jogador jogador) {

  print('${jogador.nome} quantidade apostada:');
  String? aposta = stdin.readLineSync();
  while (aposta == '') {
    print('${jogador.nome} quantidade apostada:');
    aposta = stdin.readLineSync();
  }
  jogador.aposta = int.parse(aposta!);
}

void criarCartas() {
  for (var i = 2; i < 11; i++) {
    cartas.add(Carta('$i$COPAS', i));
    cartas.add(Carta('$i$ESPADAS', i));
    cartas.add(Carta('$i$OURO', i));
    cartas.add(Carta('$i$PAUS', i));
  }
    cartas.add(Carta('J$COPAS', 10));
    cartas.add(Carta('J$ESPADAS', 10));
    cartas.add(Carta('J$OURO', 10));
    cartas.add(Carta('J$PAUS', 10));

    cartas.add(Carta('Q$COPAS', 10));
    cartas.add(Carta('Q$ESPADAS', 10));
    cartas.add(Carta('Q$OURO', 10));
    cartas.add(Carta('Q$PAUS', 10));

    cartas.add(Carta('K$COPAS', 10));
    cartas.add(Carta('K$ESPADAS', 10));
    cartas.add(Carta('K$OURO', 10));
    cartas.add(Carta('K$PAUS', 10));

    cartas.add(Carta('A$COPAS', 1));
    cartas.add(Carta('A$ESPADAS', 1));
    cartas.add(Carta('A$OURO', 1));
    cartas.add(Carta('A$PAUS', 1));

}

void abreMesa() {

  for (var i = 0; i < 3; i++) {
    pedeCarta();
  }

}

void pedeCarta() {

  int idCarta = Random().nextInt(cartas.length - 1);
  cartasMesa.add(cartas.elementAt(idCarta));
  cartas.removeAt(idCarta);

}

void imprimeMesa() {
  print("-- Cartas Mesa --");
  for (var carta in cartasMesa) {
    print(carta);
  }
}

int valorCartas() {

  var total = 0;
  for (var carta in cartas) {
    total += carta.valor;
  }

  return total;

}
void main() {

  criarCartas();
  abreMesa();
  imprimeMesa();
  pedeCarta();
  imprimeMesa();
  inicio();

}