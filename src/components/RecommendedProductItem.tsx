import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecommendedProductItem = ({ item, handleGoToProduct }) => (
  <TouchableOpacity onPress={handleGoToProduct}>
    <View style={styles.recommendedProductContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.recommendedProductImage}
      />
      <Text style={styles.recommendedProductTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.recommendedProductPrice}>
        ${item.price.toFixed(2)}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  recommendedProductContainer: {
    width: 150,
    marginRight: 10,
  },
  recommendedProductImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 12,
  },
  recommendedProductTitle: {
    fontSize: 14,
  },
  recommendedProductPrice: {
    fontWeight: 'bold',
  },
});

export default RecommendedProductItem;
