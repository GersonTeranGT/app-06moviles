import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function LoginScreen({ navigation }: any) {



    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    function login() {

        signInWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                //console.log(user)
                navigation.navigate("Perfil", Alert.alert("Exito", "Bienvenido"))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode)
                let titulo = "Error";
                let mensaje = "Revisar credenciales";
                if (errorCode == "auth/invalid-credential") {
                    titulo = "Credenciales invalidas"
                    mensaje = "Por favor, revisar correo y contraseña"
                } else if (errorCode == "auth/invalid-email") {
                    titulo = "Correo invalido"
                    mensaje = "POR FAVOR, revisar que el correo sea valido."
                } else if (errorCode == "auth/missing-password") {
                    titulo = "Error"
                    mensaje = "Por favor, ingresa tu contraseña "
                }

                Alert.alert(titulo, mensaje)
            });
    }
    function restablecer() {
        sendPasswordResetEmail(auth, correo)
            .then(() => {
                // Password reset email sent!
                Alert.alert("Mensaje", "Se envio un correo de restauración")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <Text style={styles.label}>Ingrese su correo</Text>
            <TextInput
                style={styles.input}
                placeholder='Correo'
                keyboardType="email-address"
                onChangeText={(texto) => setCorreo(texto)}
            />

            <Text style={styles.label}>Ingrese su contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                secureTextEntry={false}
                onChangeText={(texto) => setContrasenia(texto)}
            />

            <Button title="Sign in" onPress={() => login()} />

            <Text style={styles.forgotPassword} onPress={() => restablecer()}>
                Olvidaste tu contraseña, oprime aquí
            </Text>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#242222',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    forgotPassword: {
        marginTop: 15,
        color: '#007BFF',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '500',
    }
})