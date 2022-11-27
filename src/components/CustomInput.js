import React from "react";
import { View, TextInput, StyleSheet } from "react-native";



export default function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 46,
        marginTop: '2.5%',
        paddingHorizontal: 7,

        justifyContent: 'center',
        backgroundColor: 'white',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

    },

    input: {
        width: '100%',
        height: '100%',
        fontSize: 16,
    },

});