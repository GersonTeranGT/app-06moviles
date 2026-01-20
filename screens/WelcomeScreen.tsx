import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg" }}
            style={styles.container}
        >
            <Text style={styles.title}>BIENVENIDO</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Ingresar"
                    onPress={() => navigation.navigate("Login")}
                    color="#007AFF"
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Registrarse"
                    onPress={() => navigation.navigate("Registro")}
                    color="#34C759"
                />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#f8f5f5',
    },
    buttonContainer: {
        width: '80%',
        marginBottom: 15,
    },

})