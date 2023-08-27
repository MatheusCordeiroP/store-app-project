import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CategoryItem = ({ item, onPressItem }) => {
  const formattedItem = item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={() => onPressItem(item)}>
        <Image
          source={require('../assets/category-default.png')}
          style={styles.categoryImage}
        />
        <Text style={styles.categoryName}>{formattedItem}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: '32%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  categoryName: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default CategoryItem;
