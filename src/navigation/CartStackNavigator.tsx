import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartController from '../containers/Cart/cart.controller';

const CartStack = createStackNavigator();

const CartStackNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartController}
        options={{ title: 'Carrinho' }}
      />
    </CartStack.Navigator>
  );
};

export default CartStackNavigator;
