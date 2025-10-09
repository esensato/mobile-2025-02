class Jogador {

  var nome = '';

  // assume this.nome = Mesa caso nenhum parametro seja informado no construtor
  Jogador({this.nome = "Mesa"});

  var _aposta = 0;
  // aposta pode ser lida
  get aposta => _aposta;
  // definir a aposta (escrita)
  set aposta(novaAposta) {
    if (novaAposta > 10 && novaAposta <= _pontos) {
      _aposta = novaAposta;
    }
  }

  // private _pontos
  var _pontos = 100;
  // public pontos
  get pontos => _pontos;

  @override
  String toString() {
    return "$nome - pontos: $_pontos - aposta: $_aposta";
  }

}