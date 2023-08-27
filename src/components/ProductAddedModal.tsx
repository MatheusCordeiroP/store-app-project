import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductAddedModal = ({ visible, onClose, onGoToCart }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>Adicionado ao Carrinho!</Text>
          <TouchableOpacity
            style={[styles.button, styles.goToCartButton]}
            onPress={onGoToCart}
          >
            <Text style={styles.buttonText}>Ir ao Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.returnToProductButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Voltar ao Produto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  messageText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#306b40',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  goToCartButton: {
    backgroundColor: '#306b40',
  },
  returnToProductButton: {
    backgroundColor: '#777a78',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductAddedModal;
