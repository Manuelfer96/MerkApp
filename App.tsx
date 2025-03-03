import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/Navigate';
import './global.e.css';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}
