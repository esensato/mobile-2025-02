import { Text, TouchableOpacity } from "react-native";
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

// <ListaGastoDragDrop gastos={} addGasto={}/>
export default function ListaGastoDragDrop(props: any) {

    const renderItem = (info: any) => {
        const { item, onDragStart, onDragEnd, isActive } = info;

        return (
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: "#CACA" }}
                key={item}
                onPressIn={onDragStart}
                onPressOut={onDragEnd}>
                <Text>{item.descricao}</Text>
            </TouchableOpacity>
        );
    }
    const onReordered = async (fromIndex: number, toIndex: number) => {

        console.log(fromIndex, toIndex)
        const copy = [...props.gastos];
        const removed = copy.splice(fromIndex, 1);

        copy.splice(toIndex, 0, removed[0]);
        props.addGasto(copy);
    }

    return <DragList
        data={props.gastos}
        keyExtractor={(gastoAtual: any) => gastoAtual.id.toString()}
        onReordered={onReordered}
        renderItem={renderItem}
    />

}