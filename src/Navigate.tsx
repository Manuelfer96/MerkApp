import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterProductScreen from './screens/Register_product';
import CartScreen from './screens/carrito';
import HomeScreen from './screens/HomeScreen';
import BuyProductsScreen from './screens/buy_products';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsLoggedIn(true);
      }
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return null; // O un componente de carga
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="R_Product" component={RegisterProductScreen} />
            <Stack.Screen name="Carrito" component={CartScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Productos" component={BuyProductsScreen} />

          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
