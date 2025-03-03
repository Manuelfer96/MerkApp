import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from './../styles/global';
import { theme } from './../styles/theme';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([
    { id: '1', name: '1 Kilo de Papa', code: '#1534', price: 2500, quantity: 1, image: require('./../assets/images/papa.png') },
    { id: '2', name: '1 Kilo de Arroz', code: '#5344', price: 11750, quantity: 4, image: require('./../assets/images/arroz.png') },
    { id: '3', name: 'Pechuga de Pollo', code: '#7534', price: 19500, quantity: 2, image: require('./../assets/images/pollo.png') },
    { id: '4', name: 'Aceite 1L', code: '#5348', price: 14750, quantity: 2, image: require('./../assets/images/aceite.png') },
    { id: '5', name: 'Chorizo Italiano', code: '#1533', price: 24300, quantity: 10, image: require('./../assets/images/chorizo.png') },
  ]);

  // Funciones para aumentar y disminuir cantidad
  const updateQuantity = (id: string, type: string) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Calcular total del carrito
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={[globalStyles.container, { backgroundColor: theme.colors.background }]}>
      {/* Encabezado */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: theme.spacing.medium }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../assets/icons/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Text style={[globalStyles.title, { marginLeft: theme.spacing.medium, flex: 1 }]}>
          Carrito de tus Productos
        </Text>
        <Image source={require('./../assets/icons/cart.png')} style={{ width: 30, height: 30 }} />
      </View>

      {/* Lista de productos */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: theme.spacing.medium }}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.medium, padding: theme.spacing.medium, marginBottom: theme.spacing.medium }}>
            <Image source={item.image} style={{ width: 70, height: 70, borderRadius: theme.borderRadius.small }} />
            <View style={{ flex: 1, marginLeft: theme.spacing.medium }}>
              <Text style={[globalStyles.bold, { color: theme.colors.surface }]}>{item.name}</Text>
              <Text style={{ color: theme.colors.surface, fontSize: theme.fontSize.small }}>{item.code}</Text>
              <Text style={{ color: theme.colors.surface, fontSize: theme.fontSize.medium }}>COP {item.price.toLocaleString()}</Text>
            </View>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 24, color: theme.colors.surface }}>➖</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: theme.fontSize.large, color: theme.colors.surface }}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 24, color: theme.colors.surface }}>➕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Sección de pago */}
      <View style={{ backgroundColor: '#1A1A1A', padding: theme.spacing.medium, borderTopLeftRadius: theme.borderRadius.large, borderTopRightRadius: theme.borderRadius.large }}>
        {/* Campo de cupón */}
        <TextInput
          placeholder="CUPÓN"
          placeholderTextColor="white"
          style={{
            backgroundColor: '#2C2C2C',
            color: 'white',
            padding: theme.spacing.small,
            borderRadius: theme.borderRadius.medium,
            textAlign: 'center',
            marginBottom: theme.spacing.medium
          }}
        />

        {/* Total */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.spacing.medium }}>
          <Text style={{ color: 'white', fontSize: theme.fontSize.medium }}>TOTAL:</Text>
          <Text style={{ color: 'white', fontSize: theme.fontSize.medium, fontWeight: 'bold' }}>COP {totalAmount.toLocaleString()}</Text>
        </View>

        {/* Botón de hacer reservación */}
        <TouchableOpacity style={[globalStyles.button, { backgroundColor: theme.colors.primary, width: '100%', marginBottom: theme.spacing.medium }]}>
          <Text style={[globalStyles.buttonText]}>HACER RESERVACIÓN</Text>
        </TouchableOpacity>

        {/* Botón de pagar con PSE */}
        <TouchableOpacity style={[globalStyles.button, { backgroundColor: '#2C2C2C', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={[globalStyles.buttonText, { color: 'white', marginRight: 10 }]}>PAGAR CON PSE</Text>
          <Image source={require('./../assets/icons/pse.png')} style={{ width: 30, height: 20 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
