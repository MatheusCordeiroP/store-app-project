import React from 'react';
import { View, FlatList } from 'react-native';
import CartItem from '../../components/CartItem';
import styles from './cart.styles';
import RemoveProductModal from '../../components/RemoveProductModal';

const CartScreen = ({ handlers }) => {
  const {
    cartState,
    itemToEdit,
    setItemToEdit,
    addItemToCart,
    subtractItemFromCart,
    changeItemInCart,
    removeItemConfirmation,
    productToRemove,
    removeModalVisible,
    setRemoveModalVisible,
    removeItemFromCart,
  } = handlers;

  return (
    <View style={styles.container}>
      <FlatList
        data={cartState}
        renderItem={({ item }) =>
          CartItem({
            item,
            itemToEdit,
            setItemToEdit,
            addItemToCart,
            subtractItemFromCart,
            changeItemInCart,
            removeItemFromCart: removeItemConfirmation,
          })
        }
        keyExtractor={(item) => item.id?.toString()}
      />
      <RemoveProductModal
        visible={removeModalVisible}
        productName={productToRemove.title}
        onClose={() => {
          setRemoveModalVisible(false);
        }}
        onAccept={() => removeItemFromCart(productToRemove.id)}
      />
    </View>
  );
};

export default CartScreen;
