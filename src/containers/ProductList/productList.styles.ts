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
