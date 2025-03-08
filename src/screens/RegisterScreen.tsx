import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { register } from '../services/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import LinearGradient from 'react-native-linear-gradient'; // Importa LinearGradient

export default function RegisterScreen() {
  // Estados para capturar los datos del formulario
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Estado para el rol, alternable entre 'ROLE_USER' y 'ROLE_ADMIN'
  const [authority, setAuthority] = useState('ROLE_USER');

  // Función para alternar el rol
  const toggleAuthority = () => {
    setAuthority(prev => (prev === 'ROLE_USER' ? 'ROLE_ADMIN' : 'ROLE_USER'));
  };

  // Función para manejar el registro (aún sin conexión al backend)
  const handleRegister = async (e: GestureResponderEvent) => {
    e.preventDefault();
    if (
      !userName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await register({
        userName,
        email,
        password,
        authorities: [authority],
      });
      console.log(response);
      if (response.token) {
        await AsyncStorage.setItem('userToken', response.token);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Bienvenido ' + userName,
          autoClose: 2000,
        });
        navigation.navigate('Home'); // Redirige a la pantalla principal
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: response.message,
          autoClose: 2000,
        });
      }
    } catch (error) {}
  };

  return (
    // Agregamos LinearGradient aquí
    <LinearGradient 
      colors={['#b9f1bd', '#e4f8e5']}  // Colores del degradado (verde claro)
      style={globalStyles.container}  // Usamos el contenedor de globalStyles para todo el layout
    >
      <ScrollView>
        {/* Imagen superior (ajusta la ruta según corresponda) */}
        <Image
          style={globalStyles.image}
          source={require('../assets/images/2.png')}
        />

        {/* Contenedor interno */}
        <View
          style={globalStyles.innerContainer}
          className="flex w-full h-full mx-auto my-auto "
        >
          {/* Título y subtítulo */}
          <Text style={globalStyles.title}>Registro</Text>
          <Text style={globalStyles.subtitle}>
            Crea tu cuenta y empieza a disfrutar de la app
          </Text>

          {/* Campo de Nombre de Usuario */}
          <Text style={globalStyles.label}>
            <Text style={globalStyles.bold}>Nombre de Usuario</Text>
          </Text>
          <TextInput
            placeholder="Tu nombre de usuario"
            style={globalStyles.input}
            value={userName}
            onChangeText={setUserName}
          />

          {/* Campo de Email */}
          <Text style={globalStyles.label}>
            <Text style={globalStyles.bold}>Email</Text>
          </Text>
          <TextInput
            placeholder="tuemail@ejemplo.com"
            style={globalStyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Campo de Contraseña */}
          <Text style={globalStyles.label}>
            <Text style={globalStyles.bold}>Contraseña</Text>
          </Text>
          <TextInput
            placeholder="Introduce la contraseña"
            secureTextEntry
            style={globalStyles.input}
            value={password}
            onChangeText={setPassword}
          />

          {/* Campo de Confirmar Contraseña */}
          <Text style={globalStyles.label}>
            <Text style={globalStyles.bold}>Confirmar Contraseña</Text>
          </Text>
          <TextInput
            placeholder="Confirma la contraseña"
            secureTextEntry
            style={globalStyles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Text style={globalStyles.loginText}>
            ¿Ya tienes cuenta?{' '}
            <Text
              style={globalStyles.bold}
              className="hover:animate-pulse"
              onPress={() => navigation.navigate('Login')}
            >
              Ingresa
            </Text>
          </Text>

          {/* Botón para alternar el rol */}
          <TouchableOpacity
            style={[globalStyles.button, { marginVertical: 5 }]}
            onPress={toggleAuthority}
          >
            <Text style={globalStyles.buttonText}>
              Rol: {authority === 'ROLE_USER' ? 'Comprador' : 'Vendedor'}
            </Text>
          </TouchableOpacity>

          {/* Botón de Registro */}
          <TouchableOpacity
            style={globalStyles.button}
            onPress={handleRegister}
          >
            <Text style={globalStyles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          {/* Logo inferior */}
          <Image
            source={require('../assets/Logo.png')}
            style={globalStyles.logo}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
