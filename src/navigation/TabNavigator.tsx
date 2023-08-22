import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeController from '../containers/Home/home.controller';
import ProfileController from '../containers/Profile/profile.controller';
import CartController from '../containers/Cart/cart.controller';
import CategoriesController from '../containers/Categories/categories.controller';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeController} />
      <Tab.Screen name="Profile" component={ProfileController} />
      <Tab.Screen name="Cart" component={CartController} />
      <Tab.Screen name="Categories" component={CategoriesController} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
