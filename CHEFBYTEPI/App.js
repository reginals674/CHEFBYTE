import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InicioSesionScreen from './screens/InicioSesionScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <InicioSesionScreen onLoginSuccess={() => console.log('Login Ok')} />
      <StatusBar style="auto" />
    </View>
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
