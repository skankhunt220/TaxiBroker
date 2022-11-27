import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";



export default function CustomButton({ onPress, text, type = "pimary", bgColor, fgCollor }) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgCollor ? { color: fgCollor } : {},
            ]}
            >
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 58,
        padding: 15,
        marginTop: '2.5%',

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 5,
    },

    container_pimary: {
        backgroundColor: 'yellow',
    },

    container_tetriary: {
    },

    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },

    text_tetriary: {
        color: 'gray'
    },

});