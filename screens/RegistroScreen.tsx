import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export default function RegistroScreen({ navigation }: any) {

    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(18);
    const [contrasenia, setContrasenia] = useState("");

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                guardarUsuario(user.uid)

                navigation.navigate("Login");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                // ..
            });
    }
    function guardarUsuario(uid:String ) {
        set(ref(db, 'usuarios/' + uid), {
            correo: correo,
            nombre: nombre,
            edad: edad,
            
        });
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <Text style={styles.label}>Ingrese su correo</Text>
            <TextInput
                style={styles.input}
                placeholder='Correo'
                keyboardType="email-address"
                onChangeText={(texto) => setCorreo(texto)}
            />
            
            <Text style={styles.label}>Ingrese su nombre</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre'
                keyboardType="default"
                onChangeText={(texto) => setNombre(texto)}
            />

            <Text style={styles.label}>Ingrese su edad</Text>
            <TextInput
                style={styles.input}
                placeholder='Edad'
                keyboardType="numeric"
                onChangeText={(texto) => setEdad(+texto)}
            />

            <Text style={styles.label}>Ingrese su contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                secureTextEntry={false}
                onChangeText={(texto) => setContrasenia(texto)}
            />

            <Button title="Registrarme"
                color={"green"}
                onPress={() => registro()}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#399b6d98',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
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
    }
})