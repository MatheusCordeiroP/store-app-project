import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import StarRating from '../../components/StarRating';
import ProductAddedModal from '../../components/ProductAddedModal';
import CustomButton from '../../components/CustomButton';
import RecommendedProductItem from '../../components/RecommendedProductItem';
import styles from './product.styles';

const ProductScreen = ({ handlers }) => {
  const {
    product,
    recommendations,
    selectedQuantity,
    setSelectedQuantity,
    addToCart,
    isModalVisible,
    handleCloseModal,
    handleGoToCart,
    handleGoToProduct,
  } = handlers;

  const quantityArray = [];
  for (let i = 1; i <= 30; i++) {
    quantityArray.push(i?.toString());
  }

  return (
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
          itemStyle={{ height: 44 }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedQuantity(itemValue);
          }}
        >
          {quantityArray.map((item, index) => {
            return <Picker.Item label={item} value={index} key={index} />;
          })}
        </Picker>
        <CustomButton text="Adicionar ao carrinho" onPressItem={addToCart} />
      </View>

      <View style={styles.grayLine} />

      <View style={styles.recommendationsContainer}>
        {recommendations && recommendations.length > 0 ? (
          <View>
            <Text style={styles.recommendationsTitle}>
              Recomendações para você
            </Text>
            <FlatList
              data={recommendations}
              renderItem={({ item }) => (
                <RecommendedProductItem
                  item={item}
                  handleGoToProduct={() => handleGoToProduct(item)}
                />
              )}
              keyExtractor={(item) => item.id?.toString()}
              horizontal
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={styles.loadingText}>Carregando...</Text>
          </View>
        )}
      </View>

      <ProductAddedModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onGoToCart={handleGoToCart}
      />
    </ScrollView>
  );
};

export default ProductScreen;
