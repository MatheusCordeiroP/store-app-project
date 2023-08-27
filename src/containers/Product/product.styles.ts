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
    height: 50,
    width: 120,
    marginRight: 10,
  },
  recommendationsContainer: {
    paddingBottom: 32,
  },
  recommendationsTitle: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grayLine: {
    width: '100%',
    height: 4,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#888',
  },
});
export default styles;
