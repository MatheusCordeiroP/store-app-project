import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductItem = ({ item, onPressItem }) => {
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => onPressItem(item)}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <Text style={styles.productName} numberOfLines={3}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    width: '45%',
    marginLeft: '3.5%',
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#15970d',
  },
});

export default ProductItem;
