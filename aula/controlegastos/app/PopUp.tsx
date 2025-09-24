import { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

// <PopUp texto="Texto a ser exibido" exibir={true / false}/>
export default function PopUp(props: any) {

    let [exibirPopUp, setExibePopUp] = useState(props.exibir);

    return <Modal visible={exibirPopUp} transparent={true}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.textContent}>{props.texto}</Text>
                <Pressable
                    style={[styles.button]}
                    onPress={() => setExibePopUp(!exibirPopUp)}>
                    <Text style={styles.buttonText}>Fechar</Text>
                </Pressable>
            </View>
        </View>
    </Modal>

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        borderColor: 'red'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: "#4A90E2",
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.5,
        elevation: 3,
        marginVertical: 10,
        width: "90%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    textContent: {
        fontSize: 20,
        paddingBottom: 30
    }
})