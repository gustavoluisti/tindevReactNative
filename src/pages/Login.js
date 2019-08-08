import React from 'react';
import { KeyboardAvoidingView, Platform , Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import logo from '../assets/logo.png'

export default function Login() {
    return (
        <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
            <Image source={logo} />
            <TextInput
             autoCapitalize="none"
             autoCorrect={false}
             style={styles.input} 
             placeholder="Digite seu usuário no github"
             placeholderTextColor="#999"
             />
            <TouchableOpacity
                style={styles.button}
                title="teste">
                    <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 30
    },
    input:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})