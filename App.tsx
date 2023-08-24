import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import TabNavigator from './src/navigation/TabNavigator';
import { CartProvider } from './src/context/cartContext';

const App = () => {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </CartProvider>
  );
};

export default App;
