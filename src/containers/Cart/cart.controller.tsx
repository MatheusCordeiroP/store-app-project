import React, { useState } from 'react';
import CartScreen from './cart.screen';
import { useCartContext } from '../../context/cartContext';
import { CartItem } from '../../utils/types';

const CartController = () => {
  const { cartState, dispatch: dispatchCart } = useCartContext();
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [productToRemove, setProductToRemove] = useState({});

  const addItemToCart = (productId: number) => {
    const productFound = cartState.find((product) => product.id === productId);
    if (!productFound) return;

    let quantity = productFound.quantity + 1;
    const product: CartItem = {
      ...productFound,
      quantity,
    };

    dispatchCart({ type: 'ADD_TO_CART', payload: product });
  };

  const subtractItemFromCart = (productId: number) => {
    const productFound = cartState.find((product) => product.id === productId);
    if (!productFound) return;

    if (productFound.quantity == 1) return removeItemConfirmation(productId);

    let quantity = productFound.quantity - 1;
    const product: CartItem = {
      ...productFound,
      quantity,
    };

    dispatchCart({ type: 'ADD_TO_CART', payload: product });
  };

  const removeItemConfirmation = (productId: number) => {
    const productFound = cartState.find((product) => product.id === productId);
    if (!productFound) return;

    setProductToRemove(productFound);
    setRemoveModalVisible(true);
  };

  const removeItemFromCart = (productId: number) => {
    const productFound = cartState.find((product) => product.id === productId);
    if (!productFound) return;

    setRemoveModalVisible(false);
    dispatchCart({ type: 'REMOVE_FROM_CART', id: productId });
  };

  const changeItemInCart = (productId: number, newValue: number) => {
    const productFound = cartState.find((product) => product.id === productId);
    if (!productFound) return;

    let quantity = newValue;
    const product: CartItem = {
      ...productFound,
      quantity,
    };

    dispatchCart({ type: 'ADD_TO_CART', payload: product });
  };

  const handlers = {
    cartState,
    addItemToCart,
    subtractItemFromCart,
    changeItemInCart,
    removeItemConfirmation,
    productToRemove,
    removeModalVisible,
    setRemoveModalVisible,
    removeItemFromCart,
  };
  return <CartScreen handlers={handlers} />;
};

export default CartController;
