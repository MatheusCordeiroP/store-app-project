import React from 'react';
import { View, Text, Image, Button, ScrollView, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import StarRating from '../../components/StarRating';
import ProductAddedModal from '../../components/ProductAddedModal';
import styles from './product.styles';

const ProductScreen = ({ handlers }) => {
  const {
    product,
    isLoading,
    recommendations,
    selectedQuantity,
    setSelectedQuantity,
    addToCart,
    isModalVisible,
    handleCloseModal,
    handleGoToCart,
  } = handlers;

  const quantityArray = [];
  for (let i = 1; i <= 30; i++) {
    quantityArray.push(i?.toString());
  }

  return !isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Carregando...</Text>
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <StarRating count={product.rating.count} rate={product.rating.rate} />

      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>
        <Text style={styles.currency}>$</Text>{' '}
        {product.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
      <View style={styles.addToCartContainer}>
        <Text>Qtd.:</Text>
        <Picker
          style={styles.quantityPicker}
          selectedValue={selectedQuantity}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedQuantity(itemValue);
          }}
        >
          {quantityArray.map((item, index) => {
            return <Picker.Item label={item} value={index} key={index} />;
          })}
        </Picker>
        <Button title="Add to Cart" onPress={addToCart} />
      </View>

      {recommendations && recommendations.length > 0 ? (
        <View>
          <Text style={styles.recommendationsTitle}>Recommended Products</Text>
          <FlatList
            data={recommendations}
            renderItem={({ item }) => <RecommendedProductItem item={item} />}
            keyExtractor={(item) => item.id?.toString()}
            horizontal
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Carregando...</Text>
        </View>
      )}
      <ProductAddedModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onGoToCart={handleGoToCart}
      />
    </ScrollView>
  );
};

const RecommendedProductItem = ({ item }) => (
  <View style={styles.recommendedProductContainer}>
    <Image
      source={{ uri: item.image }}
      style={styles.recommendedProductImage}
    />
    <Text style={styles.recommendedProductTitle} numberOfLines={2}>
      {item.title}
    </Text>
    <Text style={styles.recommendedProductPrice}>${item.price.toFixed(2)}</Text>
  </View>
);

export default ProductScreen;
