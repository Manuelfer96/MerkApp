import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../styles/global';
import {theme} from '../styles/theme';
import {useNavigation} from '@react-navigation/native';
import {getAllProducts} from '../services/product';
import {Product} from '../models';

const ProductScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: theme.colors.background},
      ]}>
      {/* Encabezado */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: theme.spacing.medium,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./../assets/icons/back.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Text
          style={[
            globalStyles.title,
            {marginLeft: theme.spacing.medium, flex: 1},
          ]}>
          Carrito de tus Productos
        </Text>
        <Image
          source={require('./../assets/icons/cart.png')}
          style={{width: 30, height: 30}}
        />
      </View>

      {/* Lista de productos */}
      <FlatList
        data={products}
        keyExtractor={(item, i) => item.id}
        contentContainerStyle={{paddingHorizontal: theme.spacing.medium}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.medium,
              padding: theme.spacing.medium,
              marginBottom: theme.spacing.medium,
            }}>
            <Image
              source={item.image}
              style={{
                width: 70,
                height: 70,
                borderRadius: theme.borderRadius.small,
              }}
            />
            <View style={{flex: 1, marginLeft: theme.spacing.medium}}>
              <Text style={[globalStyles.bold, {color: theme.colors.surface}]}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: theme.colors.surface,
                  fontSize: theme.fontSize.small,
                }}>
                {item.code}
              </Text>
              <Text
                style={{
                  color: theme.colors.surface,
                  fontSize: theme.fontSize.medium,
                }}>
                COP {item.price.toLocaleString()}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, 'decrease')}
              style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 24, color: theme.colors.surface}}>
                ➖
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: theme.fontSize.large,
                color: theme.colors.surface,
              }}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, 'increase')}
              style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 24, color: theme.colors.surface}}>
                ➕
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Sección de pago */}
      <View
        style={{
          backgroundColor: '#1A1A1A',
          padding: theme.spacing.medium,
          borderTopLeftRadius: theme.borderRadius.large,
          borderTopRightRadius: theme.borderRadius.large,
        }}>
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
            marginBottom: theme.spacing.medium,
          }}
        />

        {/* Total */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: theme.spacing.medium,
          }}>
          <Text style={{color: 'white', fontSize: theme.fontSize.medium}}>
            TOTAL:
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: theme.fontSize.medium,
              fontWeight: 'bold',
            }}>
            COP {totalAmount.toLocaleString()}
          </Text>
        </View>

        {/* Botón de hacer reservación */}
        <TouchableOpacity
          style={[
            globalStyles.button,
            {
              backgroundColor: theme.colors.primary,
              width: '100%',
              marginBottom: theme.spacing.medium,
            },
          ]}>
          <Text style={[globalStyles.buttonText]}>HACER RESERVACIÓN</Text>
        </TouchableOpacity>

        {/* Botón de pagar con PSE */}
        <TouchableOpacity
          style={[
            globalStyles.button,
            {
              backgroundColor: '#2C2C2C',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text
            style={[
              globalStyles.buttonText,
              {color: 'white', marginRight: 10},
            ]}>
            PAGAR CON PSE
          </Text>
          <Image
            source={require('./../assets/icons/pse.png')}
            style={{width: 30, height: 20}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
