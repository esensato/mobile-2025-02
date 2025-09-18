
import { View, Text, Pressable, TextInput, StatusBar, FlatList, Image } from "react-native";
import { useState } from "react";
import { estilo } from "./estilo";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderItemGasto from "./RenderItemGasto";
import ListaGasto from "./ListaGasto";
import ListaGastoDragDrop from "./ListaGastoDragDrop";

export default function Index() {

  type Gasto = { id: number, descricao: string, valor: number };

  let [titulo, setTitulo] = useState('');
  let [gasto, addGasto] = useState<Gasto[]>([]);

  function onTituloChange(textoDigitado: string) {
    console.log(textoDigitado);
    setTitulo(textoDigitado);
  }

  function addGastoHandler() {
    // ["Gasto 1", "Gasto 2"]
    // ...["Gasto 1", "Gasto 2"] = "Gasto1", "Gasto 2"
    // "Gasto1", "Gasto 2", titulo = ["Gasto1", "Gasto 2", titulo]

    //[{id:1, descricao: "Gasto 1", valor: 100}, {id:2, descricao: "Gasto 2", valor: 200}]
    let gastosAtuais = [...gasto];
    const novoGasto: Gasto = { id: Date.now(), descricao: titulo, valor: 0 };
    gastosAtuais.push(novoGasto);
    addGasto(gastosAtuais);
    setTitulo("");
  }

  function removerGastoLista(index: number) {
    let gastosAtuais = [...gasto];
    gastosAtuais.splice(index, 1);
    addGasto(gastosAtuais);
  }

  function atualizarGasto(gasto: Gasto) {
    setTitulo(gasto.descricao);
  }



  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <View style={estilo.container}>
      {/* Área superior: input + botão */}
      <View style={estilo.topSection}>
        <TextInput style={estilo.input} onChangeText={onTituloChange} value={titulo} placeholder="Descrição do Gasto" />
        <Pressable style={({ pressed }) => [estilo.button, pressed && estilo.buttonPressed]}
          onPress={addGastoHandler} >
          <Text style={estilo.buttonText}>Adicionar</Text>
        </Pressable>

      </View>

      {/* Área inferior: lista de gastos */}

      <ListaGastoDragDrop gastos={gasto} addGasto={addGasto} />
      { /* 
      <ListaGasto gasto={gasto} onPress={atualizarGasto} onLongPress={removerGastoLista} />      
      */}

    </View>

  </SafeAreaView>


}


