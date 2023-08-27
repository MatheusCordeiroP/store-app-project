import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import QuantityButton from './QuantityButton';
import ChangeValueModal from './ChangeValueModal';
import CustomButton from './CustomButton';

const CartItem = ({
  item,
  addItemToCart,
  subtractItemFromCart,
  changeItemInCart,
  removeItemFromCart,
}) => {
  const [itemEdit, setItemEdit] = useState({ id: 0, quantity: 0 });

  return (
    <View style={styles.itemContainer}>
      <View style={styles.cartItemContainer}>
        <Image source={{ uri: item.image }} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails}>
          <Text style={styles.cartItemName}>{item.title}</Text>
          <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonsGroup}>
        <View style={styles.quantityGroup}>
          <QuantityButton
            icon="remove-outline"
            onPressItem={() => subtractItemFromCart(item.id)}
            roundLeftBorders={8}
          />
          <TouchableOpacity
            style={styles.quantityInput}
            onPress={() => {
              setItemEdit({ id: item.id, quantity: item.quantity });
            }}
          >
            <TextInput
              value={item.quantity?.toString()}
              onChangeText={() => {}}
              keyboardType="numeric"
              placeholder="Enter quantity"
              style={styles.quantityInputText}
              textAlign="center"
              textAlignVertical="center"
              editable={false}
            />
          </TouchableOpacity>
          <QuantityButton
            icon="add-outline"
            onPressItem={() => addItemToCart(item.id)}
            roundRightBorders={8}
          />
        </View>
        <CustomButton
          text="Remover"
          styles={styles.removeButton}
          onPressItem={() => removeItemFromCart(item.id)}
        />
      </View>
      <ChangeValueModal
        itemId={itemEdit.id}
        baseValue={itemEdit.quantity}
        visible={itemEdit.id != 0}
        onClose={() => {
          setItemEdit({ id: 0, quantity: 0 });
        }}
        onFinish={({ id, newQuantity }) => {
          changeItemInCart(id, parseInt(newQuantity));
          setItemEdit({ id: 0, quantity: 0 });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  quantityGroup: {
    justifyContent: 'center',
    width: '44%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 8,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  quantityInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#333',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
  },
  quantityInputText: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
    height: '100%',
  },
  removeButton: {
    width: 100,
  },
});

export default CartItem;
