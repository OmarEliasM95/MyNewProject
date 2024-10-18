import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

  const Stack = createStackNavigator()
import CrearUsuario from './screens/Crear';
import DetallesDeUsuario from './screens/Detalles';
import ListaDeUsuarios from './screens/Lista';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CrearUsuario" component={CrearUsuario} />
      <Stack.Screen name="ListaDeUsuarios" component={ListaDeUsuarios} />
      <Stack.Screen name="DetallesDeUsuario" component={DetallesDeUsuario} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
