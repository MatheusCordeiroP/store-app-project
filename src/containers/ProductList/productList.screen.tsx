import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import styles from './productList.styles';

const ProductListScreen = ({ handlers }) => {
  const { products, isLoadingProducts, handleSelectProduct } = handlers;

  const numColumns = 2;

  return isLoadingProducts ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem item={item} onPressItem={handleSelectProduct} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default ProductListScreen;
