import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList, SafeAreaView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Home, Search, ShoppingCart, LogOut } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

// Bottom Navigation Component
const BottomNavigation = ({ activeTab, onTabPress }) => {
  const navigation = useNavigation();
  const NavButton = ({ icon: Icon, label, onPress, isActive }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
    >
      <Icon color={isActive ? '#139903' : 'gray'} size={24} />
      <Text
        style={{
          color: isActive ? '#139903' : 'gray',
          fontSize: 15,
          marginTop: 5,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
      }}
    >
      <NavButton icon={Home} label="Shop" onPress={() => navigation.navigate('Productos')} isActive={activeTab === 'Shop'} />
      <NavButton icon={Search} label="Explore" onPress={() => onTabPress('Explore')} isActive={activeTab === 'Explore'} />
      <NavButton icon={ShoppingCart} label="Cart" onPress={() => navigation.navigate('Carrito')} isActive={activeTab === 'Cart'} />
      <NavButton icon={LogOut} label="Logout" onPress={() => onTabPress('Logout')} isActive={activeTab === 'Logout'} />
    </View>
  );
};

// HomeScreen Component with Modal for "Ver Tiendas"
export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Shop');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (tab === 'Explore') {
      // Muestra el campo de búsqueda al presionar "Explore"
      setIsSearchVisible(true);
    } else {
      // Oculta el campo de búsqueda si no está presionado "Explore"
      setIsSearchVisible(false);
    }
  };

  // Data for stores to display in the modal
  const stores = [
    { id: '1', name: 'SuperMercado La Ceiba' },
    { id: '2', name: 'SuperMercado Ruco' },
    { id: '3', name: 'Tienda de la esquina' },
    { id: '4', name: 'Tienda Doña Mari' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={['#bdf2c1', '#e4f8e5']} style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {/* Imagen de fondo o encabezado */}
          <Image
            source={require('../assets/images/pasillo.png')} // Ajusta la ruta de la imagen
            style={{ width: '100%', height: 250, resizeMode: 'cover' }}
          />

          {/* Contenido central */}
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            {/* Título */}
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', marginBottom: 20 }}>
              Bienvenido a MerkApp
            </Text>

            {/* Mostrar campo de búsqueda solo si "Explore" está activo */}
            {isSearchVisible && (
              <View style={{ width: '80%', marginBottom: 20 }}>
                <TextInput
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  style={{
                    padding: 15,
                    backgroundColor: '#f0f0f0',
                    borderRadius: 10,
                    fontSize: 18,
                    height: 50, // Aumentando el tamaño de la barra de búsqueda
                  }}
                  autoFocus // Activa el enfoque automático al presionar Explore
                />
              </View>
            )}

            {/* Botones de acción con degradado horizontal y borde negro */}
            <LinearGradient
              colors={['#139903', '#073f00']} // Degradado horizontal de verde a verde agua
              start={{ x: 0.3, y: 0 }} // De izquierda a derecha
              end={{ x: 1, y: 0 }} // De izquierda a derecha
              style={{
                borderRadius: 10,
                marginBottom: 25,
                borderWidth: 2,
                borderColor: 'black',
              }}
            >
              <TouchableOpacity
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 70,
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate('Productos')} // Navegar a BuyProductsScreen
              >
                <Text style={{ color: '#fff', fontSize: 25 }}>Ver Productos</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#139903', '#073f00']} // Degradado horizontal de verde a verde agua
              start={{ x: 0.3, y: 0 }} // De izquierda a derecha
              end={{ x: 1, y: 0 }} // De izquierda a derecha
              style={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'black',
              }}
            >
              <TouchableOpacity
                style={{
                  paddingVertical: 25,
                  paddingHorizontal: 50,
                  borderRadius: 10,
                }}
                onPress={() => setModalVisible(true)} // Show modal when pressing "Ver Tiendas"
              >
                <Text style={{ color: '#fff', fontSize: 25 }}>Ver Tiendas</Text>
              </TouchableOpacity>
            </LinearGradient>

            {/* Logo */}
            <Image
              source={require('../assets/Logo.png')} // Ajusta la ruta del logo
              style={{ width: 300, height: 100, resizeMode: 'contain', marginTop: 80 }}
            />
          </View>
        </View>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
      </LinearGradient>

      {/* Modal for Stores */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '80%',
              height: '60%',
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Selecciona una Tienda</Text>
            <FlatList
              data={stores}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 15,
                    borderBottomWidth: 1,
                    borderColor: '#e0e0e0',
                  }}
                  onPress={() => {
                    setModalVisible(false); // Close modal on item press
                    alert(`Tienda seleccionada: ${item.name}`);
                  }}
                >
                  <Image
                    source={require('../assets/icons/shop.png')} // Icono de tienda (ajustar ruta)
                    style={{ width: 40, height: 40, marginRight: 10 }}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: '#139903',
                borderRadius: 5,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
