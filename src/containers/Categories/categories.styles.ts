import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
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
