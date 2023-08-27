import React from 'react';
import { Text, View, FlatList } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import styles from './categories.styles';

const CategoriesScreen = ({ handlers }) => {
  const { categories, isLoading, handleSelectCategory } = handlers;

  const numColumns = 3;

  return isLoading ? (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem item={item} onPressItem={handleSelectCategory} />
        )}
        keyExtractor={(item) => item}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default CategoriesScreen;
