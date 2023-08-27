import React, { useState, useEffect } from 'react';
import ProductScreen from './product.screen';
import { getProductsInCategory } from '../../utils/fakeStoreApi';
import { useCartContext } from '../../context/cartContext';
import { CartItem } from '../../utils/types';

const ProductController = ({ route, navigation }) => {
  const { cartState, dispatch: dispatchCart } = useCartContext();

  const [recommendations, setRecommendations] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchProductsInCategory = async () => {
    const selectedProduct = route.params?.selectedProduct;
    if (!selectedProduct) return;

    const products = await getProductsInCategory(selectedProduct.category);
    const filteredProducts = products.filter(
      (product) => product.id !== selectedProduct.id
    );

    const shuffledProducts = shuffleArray(filteredProducts);
    const limitedProducts = shuffledProducts.slice(0, 4);

    setRecommendations(limitedProducts);
  };

  // Função que encontrei para embaralhar os elementos de uma array.
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const addToCart = () => {
    const selectedProduct = route.params?.selectedProduct;
    if (!selectedProduct) return;

    const productFound = cartState.find(
      (product) => product.id === selectedProduct.id
    );

    let quantity = selectedQuantity + 1;
    if (productFound) {
      quantity += productFound.quantity;
    }

    const product: CartItem = {
      ...selectedProduct,
      quantity,
    };

    try {
      dispatchCart({ type: 'ADD_TO_CART', payload: product });
      setIsModalVisible(true);
    } catch (error) {
      console.error('Error - add product to cart:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleGoToCart = () => {
    setIsModalVisible(false);
    navigation.navigate('CartTab', {});
  };

  const handleGoToProduct = (product: any) => {
    setRecommendations([]);
    navigation.navigate('Product', {
      selectedProduct: product,
    });
  };

  useEffect(() => {
    fetchProductsInCategory();
  }, [route]);

  const handlers = {
    product: route.params?.selectedProduct,
    recommendations,
    selectedQuantity,
    setSelectedQuantity,
    addToCart,
    isModalVisible,
    handleCloseModal,
    handleGoToCart,
    handleGoToProduct,
  };

  return <ProductScreen handlers={handlers} />;
};

export default ProductController;
