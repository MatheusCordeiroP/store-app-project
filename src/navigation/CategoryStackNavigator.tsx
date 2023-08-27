import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartController from '../containers/Cart/cart.controller';
import CategoriesController from '../containers/Categories/categories.controller';
import ProductListController from '../containers/ProductList/productList.controller';
import ProductController from '../containers/Product/product.controller';

const CategoryStack = createStackNavigator();

const CategoryStackNavigator = () => {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Categories"
        component={CategoriesController}
        options={{ title: 'Categorias' }}
      />
      <CategoryStack.Screen
        name="ProductList"
        component={ProductListController}
        options={{ title: 'Produtos' }}
      />
      <CategoryStack.Screen
        name="Product"
        component={ProductController}
        options={{ title: 'Detalhes' }}
      />
    </CategoryStack.Navigator>
  );
};

export default CategoryStackNavigator;
