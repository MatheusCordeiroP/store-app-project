import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
  currency: {
    fontSize: 12,
    marginRight: 2,
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quantityPicker: {
    width: 120,
    marginRight: 10,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendedProductContainer: {
    width: 150,
    marginRight: 10,
  },
  recommendedProductImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
  },
  recommendedProductTitle: {
    fontSize: 14,
  },
  recommendedProductPrice: {
    fontWeight: 'bold',
  },
});
export default styles;
