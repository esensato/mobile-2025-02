
import { View, Text, Pressable, TextInput, StatusBar } from "react-native";
import { useState } from "react";
import { estilo } from "./estilo";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View style={estilo.listSection}>
        {gasto.map((item) => {
          // { id: number, descricao: string, valor: number };
          return <Text key={item.id} style={estilo.listPlaceholder}>{item.descricao} {item.valor}</Text>
        })}
      </View>
    </View>

  </SafeAreaView>


}


