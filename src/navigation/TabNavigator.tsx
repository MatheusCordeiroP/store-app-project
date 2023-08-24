import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeController from '../containers/Home/home.controller';
import ProfileController from '../containers/Profile/profile.controller';
import CartController from '../containers/Cart/cart.controller';
import CategoriesController from '../containers/Categories/categories.controller';
import ProductListController from '../containers/ProductList/productList.controller';
// import ProductController from '../containers/Product/product.controller';
import { Ionicons } from '@expo/vector-icons';

const CategoryStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoryStackNavigator = () => {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Categories"
        component={CategoriesController}
      />
      <CategoryStack.Screen
        name="ProductList"
        component={ProductListController}
      />
      {/* <CategoryStack.Screen name="Product" component={ProductController} /> */}
    </CategoryStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeController}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileController}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartController}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryStackNavigator}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
