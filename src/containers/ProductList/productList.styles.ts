import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  productImageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  productName: {
    textAlign: 'center',
    marginBottom: 5,
  },
  offerContainer: {
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  offerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
