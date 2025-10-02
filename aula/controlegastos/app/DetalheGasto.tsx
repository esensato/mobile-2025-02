import { Text, View } from "react-native";

export default function DetalheGasto(props: any) {

    console.log("---------");
    console.log(props.route.params);

    return <View>
        <Text>{props.route.params ? props.route.params.id : "-"}</Text>
        <Text>{props.route.params ? props.route.params.descricao : "-"}</Text>
        <Text>{props.route.params ? props.route.params.valor : "-"}</Text>
    </View>

}