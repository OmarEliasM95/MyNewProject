import React, {useState} from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { db } from '../Database/firebase'; // Asegúrate de que la ruta sea correcta
import { addDoc, collection } from "firebase/firestore"; 

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
    const GuardarUsuario = async () => {
        const mensajes = []; // Array para almacenar los mensajes de error
    
        if (state.Nombre === '') {
            mensajes.push('Por favor, Ingresar un Nombre');
        }
        if (state.Apellido === '') {
            mensajes.push('Por favor, Ingresar un Apellido');
        }
        if (state.Email === '') {
            mensajes.push('Por favor, Ingresar un Email');
        }
        if (state.Telefono === '') {
            mensajes.push('Por favor, Ingresar un Telefono');
        }
    
        if (mensajes.length > 0) {
            alert(mensajes.join('\n')); // Muestra todos los mensajes en una sola alerta
        }  else {
            try {
                await addDoc(collection(db, "usuarios"), {
                    Nombre: state.Nombre,
                    Apellido: state.Apellido,
                    Email: state.Email,
                    Telefono: state.Telefono,
                });
                alert('Usuario guardado exitosamente!');
                setState({ Nombre: '', Apellido: '', Email: '', Telefono: '' });
            } catch (error) {
                console.error("Error al guardar el usuario: ", error);
                alert('Error al guardar el usuario, intenta de nuevo.');
            }
        }
    };
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Nombre"
                value={state.Nombre}
                onChangeText={(value) => handleChangeText("Nombre", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Apellido"
                value={state.Apellido}
                onChangeText={(value) => handleChangeText("Apellido", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"
                value={state.Email}
                onChangeText={(value) => handleChangeText("Email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Telefono"
                value={state.Telefono}
                onChangeText={(value) => handleChangeText("Telefono", value)}
                />
            </View>
            <View style={styles.button}>
                <Button title="AgregarUsuario" onPress={()=>GuardarUsuario()} />
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