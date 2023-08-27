import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CategoryItem = ({ item, onPressItem }) => (
  <View style={styles.categoryContainer}>
    <TouchableOpacity onPress={() => onPressItem(item)}>
      <Image
        source={require('../assets/category-default.png')}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryName}>{item}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  categoryContainer: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryImage: {
    width: 110,
    height: 110,
    marginBottom: 5,
  },
  categoryName: {
    textAlign: 'center',
  },
});

export default CategoryItem;
