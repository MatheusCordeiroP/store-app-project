import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeController from '../containers/Home/home.controller';
import CartController from '../containers/Cart/cart.controller';
import CategoriesController from '../containers/Categories/categories.controller';
import ProductListController from '../containers/ProductList/productList.controller';
import ProductController from '../containers/Product/product.controller';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeController} />
      <HomeStack.Screen name="Cart" component={CartController} />
      <HomeStack.Screen name="Categories" component={CategoriesController} />
      <HomeStack.Screen name="ProductList" component={ProductListController} />
      <HomeStack.Screen name="Product" component={ProductController} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
