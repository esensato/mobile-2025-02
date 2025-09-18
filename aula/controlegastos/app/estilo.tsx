
import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
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
    },
    container: {
        flex: 1, // ocupa toda a dimensão vertical
        padding: 10
    },
    input: {
        height: 50,
        width: "100%",
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#f9f9f9",
        shadowColor: "#c21313",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.21,
        shadowRadius: 8.19,
        elevation: 11,
        fontSize: 16,
        color: "#333",
    },
    inputFocused: {
        borderColor: "#4A90E2",
        backgroundColor: "#fff",
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
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    buttonPressed: {
        backgroundColor: "#357ABD"
    },
    topSection: {
        alignItems: "center",
    },
    listSection: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#ffff",
        borderRadius: 12,
        padding: 15,
    },
    listPlaceholder: {
        color: "#666",
        fontSize: 14,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 10,
    },
});
