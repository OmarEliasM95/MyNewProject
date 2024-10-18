import React, {useState} from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CrearUsuario = () => {
    const [state, setState]= useState({
            Nombre:'',
            Apellido:'',
            Email:'',
            Telefono:'',
        })
    const handleChangeText = (Nombre, value) => {
        setState({...state, [Nombre]:value})
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Nombre"
                onChangeText={(value) => handleChangeText("Nombre", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Apellido"
                onChangeText={(value) => handleChangeText("Apellido", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"
                onChangeText={(value) => handleChangeText("Email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Telefono"
                onChangeText={(value) => handleChangeText("Telefono", value)}
                />
            </View>
            <View style={styles.button}>
                <Button title="AgregarUsuario" onPress={()=>console.log(state)} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex:1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#50C878'
    },
    button: {
            backgroundColor: '#00FF00',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
    }
})
export default CrearUsuario