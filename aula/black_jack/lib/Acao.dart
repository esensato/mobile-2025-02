enum Acao {
  esperar, comprar, apostar, fim;
  static String opcoes() {
    return '${esperar.name}, ${comprar.name}, ${apostar.name}, ${fim.name}';
  }
}