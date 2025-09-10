
import { View, Text, Button } from "react-native";
import { useState } from "react";
import { estilo } from "./estilo";

export default function Index() {

  // contador = somente leitura armazena o valor atual
  // incrementar = função para alterar (escrita) o valor atual de contador
  let [contador, incrementar] = useState(1);

  function contar() {
    incrementar(++contador);
    console.log(contador);
  }

  return <View style={estilo.container}>
    <Text>Valor Contador = {contador}</Text>
    <Button title="Contar Pontos" onPress={contar} />
  </View>
}


