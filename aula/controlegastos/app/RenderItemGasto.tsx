// criar visualmente cada uma das linhas da lista de gastos

import { Image, Pressable, Text, View, StyleSheet } from "react-native";

// <RenderItemGasto item={} index={} onLongPress={} onPress={}/>
export default function RenderItemGasto(props: any) {

    console.log(props);

    const item: any = props.item;
    const index: number = props.index;

    return (
        <Pressable onLongPress={() => props.onLongPress(index)} onPress={() => props.onPress(item)}>
            <View style={estilo.gastoCard}>
                <Image source={require("../assets/images/001-coin.png")} style={estilo.gastoIcon} />
                <Text style={estilo.gastoDescricao}>{item.descricao}</Text>
                <Text style={estilo.gastoValor}>R$ {item.valor.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
}

const estilo = StyleSheet.create({
    gastoCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 6,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    gastoDescricao: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    gastoValor: {
        fontSize: 16,
        fontWeight: "700",
        color: "#4A90E2",
    },
    gastoIcon: {
        width: 28,
        height: 28,
        marginRight: 10,
        resizeMode: "contain",
    }
})