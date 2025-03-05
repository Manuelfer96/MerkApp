import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, ShoppingCart, Search, Plus } from 'lucide-react-native';
import { BottomNavigation } from './BottomNavigation';
import {useNavigation} from '@react-navigation/native';


// Componente para tarjetas de productos
const ProductCard = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.productCard}>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Image 
          source={image} 
          style={styles.productImage} 
          resizeMode="cover" 
        />
        <Text style={styles.productWeight}>1 Kilo, Precio</Text>
        <Text style={styles.productPrice}>COP {price}</Text>
        <TouchableOpacity 
          onPress={() => setQuantity(quantity + 1)}
          style={styles.addButton}
        >
          <Plus size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function BuyProductsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Products');
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    // Aquí puedes agregar lógica de navegación si es necesario
    switch(tab) {
      case 'Home':
        // Navegar a la pantalla de inicio
        break;
      case 'Cart':
        navigation.navigate('Carrito');
        break;
      case 'Profile':
        // Navegar a la pantalla de perfil
        break;
      default:
        break;
    }
  };

  // Datos de productos (puedes expandir o conectar a una base de datos)
  const products = [
    { 
      name: 'Papas', 
      price: '2.500', 
      image: require('../assets/images/papa.png') 
    },
    { 
      name: 'Arroz', 
      price: '3.200', 
      image: require('../assets/images/arroz.png') 
    },
    { 
      name: 'Pechuga de Pollo', 
      price: '8.250', 
      image: require('../assets/images/chorizo.png') 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ChevronLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comprar Productos</Text>
        <TouchableOpacity>
          <ShoppingCart color="black" size={24} />
        </TouchableOpacity>
      </View>

      {/* El resto del contenido está dentro del ScrollView */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Nombre de la tienda */}
        <View style={styles.storeNameContainer}>
          <Text style={styles.storeName}>Tienda de la Esquina</Text>
        </View>

        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar tienda..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Banner de ofertas */}
        <View style={styles.offerBanner}>
          <Image 
            source={require('../assets/images/banner.png')}
            style={styles.offerBannerImage} 
          />
          <View style={styles.offerTextContainer}>
            <Text style={styles.offerBannerText}>Fresh Vegetables</Text>
            <Text style={styles.offerBannerSubtext}>Get Up To 40% Off</Text>
          </View>
        </View>

        {/* Lista de productos */}
        <View style={styles.productGrid}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </View>
      </ScrollView>

      {/* Navegación inferior */}
      <BottomNavigation
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#b9f1bd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#139903', // Fondo verde más fuerte
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', // Color blanco para el texto
    flex: 1,
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1, // Hace que el ScrollView ocupe todo el espacio restante
  },
  storeNameContainer: {
    padding: 15,
    backgroundColor: '#b9f1bd',
  },
  storeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Color negro para el nombre de la tienda
    textAlign: 'center',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#b9f1bd',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  offerBanner: {
    position: 'relative',
    margin: 15,
    borderRadius: 10,
  },
  offerBannerImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  offerTextContainer: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 15,
    zIndex: 1,
    alignItems: 'center',
  },
  offerBannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerBannerSubtext: {
    color: 'white',
    fontSize: 14,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#b9f1bd',
    borderRadius: 25,
    marginBottom: 15,
    overflow: 'hidden',
    padding: 10,
    position: 'relative',
    borderWidth: 3, // Bordes del producto
    borderColor: '#039a0d', // Color verde de los bordes
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 }, // Sombra
    shadowOpacity: 0.5, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
  },
  productDetails: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productWeight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    right: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 1,
    backgroundColor: '#139903',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#139903',
    padding: 5,
    borderRadius: 5,
    width: 30,
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
  },
};
