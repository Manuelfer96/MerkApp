import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, List, ShoppingCart, User } from 'lucide-react-native';

export const BottomNavigation = ({ activeTab, onTabPress }) => {
  const NavButton = ({ icon: Icon, label, onPress, isActive }) => (
    <TouchableOpacity 
      onPress={onPress} 
      style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 10 
      }}
    >
      <Icon 
        color={isActive ? '#139903' : 'gray'} 
        size={24} 
      />
      <Text 
        style={{ 
          color: isActive ? '#139903' : 'gray', 
          fontSize: 10, 
          marginTop: 5 
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
        borderTopColor: '#e0e0e0' 
      }}
    >
      <NavButton 
        icon={Home} 
        label="Inicio" 
        onPress={() => onTabPress('Home')} 
        isActive={activeTab === 'Home'}
      />
      <NavButton 
        icon={List} 
        label="Productos" 
        onPress={() => onTabPress('Products')} 
        isActive={activeTab === 'Products'}
      />
      <NavButton 
        icon={ShoppingCart} 
        label="Carrito" 
        onPress={() => onTabPress('Cart')} 
        isActive={activeTab === 'Cart'}
      />
      <NavButton 
        icon={User} 
        label="Perfil" 
        onPress={() => onTabPress('Profile')} 
        isActive={activeTab === 'Profile'}
      />
    </View>
  );
};
