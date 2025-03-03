import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from './../styles/global';
import { theme } from './../styles/theme';
import { useNavigation } from '@react-navigation/native';

export default function RegisterProductScreen() {
  const navigation = useNavigation();

  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={[globalStyles.container, { backgroundColor: theme.colors.background }]}>
      {/* Encabezado con botón de regreso */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: theme.spacing.medium }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../assets/icons/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Text style={[globalStyles.title, { marginLeft: theme.spacing.medium }]}>
          Registrar Producto
        </Text>
      </View>

      <ScrollView>
        <View style={globalStyles.innerContainer}>
          {/* Nombre del producto */}
          <Text style={globalStyles.label}><Text style={globalStyles.bold}>Nombre del producto</Text></Text>
          <TextInput
            style={globalStyles.input}
            placeholder=""
            value={productName}
            onChangeText={setProductName}
          />

          {/* Tipo de producto */}
          <Text style={globalStyles.label}><Text style={globalStyles.bold}>Tipo del producto</Text></Text>
          <TextInput
            style={globalStyles.input}
            placeholder=""
            value={productType}
            onChangeText={setProductType}
          />

          {/* Precio */}
          <Text style={globalStyles.label}><Text style={globalStyles.bold}>Precio</Text></Text>
          <TextInput
            placeholder="En Pesos Colombianos  Ej: 25.000"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
            style={globalStyles.input}
          />

          {/* Descripción */}
          <Text style={globalStyles.label}><Text style={globalStyles.bold}>Descripción</Text></Text>
          <TextInput
            style={[globalStyles.input, { height: 200 }]}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          {/* Botón para subir imagen */}
          <TouchableOpacity style={[globalStyles.button, { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginRight: 40, width: 200 }]}>
            <Image source={require('./../assets/icons/upload.png')} style={{ width: 20, height: 20, tintColor: theme.colors.surface }} />
            <Text style={[globalStyles.buttonText, { marginLeft: 8 }]}>Subir Imagen</Text>
          </TouchableOpacity>

          {/* Botón para guardar producto */}
          <TouchableOpacity style={[globalStyles.button, { backgroundColor: theme.colors.primary, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }]}>
            <Image source={require('./../assets/icons/save.png')} style={{ width: 20, height: 20, tintColor: theme.colors.surface }} />
            <Text style={[globalStyles.buttonText, { marginLeft: 8 }]}>Guardar Producto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
