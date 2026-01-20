import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';

export default function PerfilScreen() {

    const [datos, setDatos] = useState({})

    useEffect(() => {
        leerUsuario()
    }, [])


    function leerUsuario() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                //console.log(uid);
                leerUsuarioLogueado(uid);

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }


    function leerUsuarioLogueado(uid: String) {
        const starCountRef = ref(db, 'usuarios/' + uid);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setDatos(data);

        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil de usuario</Text>
            <Text style={styles.text}>Nombre: {datos.nombre}</Text>
            <Text style={styles.text}>Correo: {datos.correo}</Text>
            <Text style={styles.text}>Edad: {datos.edad} años</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
        color:"#bd9090"
    },
    text:{
        fontSize:20,
        fontWeight: 'bold'
    }
})