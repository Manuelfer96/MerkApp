import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles/global';
import {login} from '../services/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast, ALERT_TYPE, Dialog} from 'react-native-alert-notification';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        email,
        password,
      });

      if (response.token) {
        await AsyncStorage.setItem('userToken', response.token);
        navigation.navigate('Home'); // Redirige a la pantalla principal
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: response.message,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log('error', error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: error.message,
        autoClose: 2000,
      });
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Imagen superior */}
      <Image
        source={require('../assets/images/1.png')}
        style={globalStyles.image}
      />

      {/* Fondo con degradado */}
      <View style={globalStyles.innerContainer}>
        {/* Título */}
        <Text style={globalStyles.title}>Inicio de sesión</Text>

        {/* Subtítulo */}
        <Text style={globalStyles.subtitle}>
          Iniciar sesión con tu cuenta de{' '}
          <Text style={globalStyles.bold}>Google</Text>
        </Text>

        {/* Campo de Email */}
        <Text style={globalStyles.label}>
          <Text style={globalStyles.bold}>Email</Text>
        </Text>
        <TextInput
          placeholder="hey@tuemail.com"
          value={email}
          style={globalStyles.input}
          onChangeText={value => setEmail(value)}
        />

        {/* Campo de Contraseña */}
        <Text style={globalStyles.label}>
          <Text style={globalStyles.bold}>Contraseña</Text>
        </Text>
        <TextInput
          placeholder="Introduce la contraseña"
          value={password}
          secureTextEntry
          style={globalStyles.input}
          onChangeText={value => setPassword(value)}
        />

        {/* Botón de Inicio de Sesión */}
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Texto de registro */}
        <Text style={globalStyles.registerText}>
          ¿No tienes cuenta?{' '}
          <Text
            style={globalStyles.bold}
            onPress={() => navigation.navigate('Register')}>
            Regístrate
          </Text>
        </Text>

        {/* Logo */}
        <Image
          source={require('../assets/Logo.png')}
          style={globalStyles.logo}
        />
      </View>
    </SafeAreaView>
  );
}
