import { FlatList, View, StyleSheet } from "react-native";
import RenderItemGasto from "./RenderItemGasto";

export default function ListaGasto(props: any) {

    return <View style={estilo.listSection}>
        <FlatList
            data={props.gasto}
            renderItem={(gastoAtual) => <RenderItemGasto
                item={gastoAtual.item}
                index={gastoAtual.index}
                onPress={props.onPress}
                onLongPress={props.onLongPress} />}
            keyExtractor={(gastoAtual) => gastoAtual.id.toString()} />
    </View>
}

const estilo = StyleSheet.create({
    listSection: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#ffff",
        borderRadius: 12,
        padding: 15,
    },
});
