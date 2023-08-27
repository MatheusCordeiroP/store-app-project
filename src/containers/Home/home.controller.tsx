import React, { useState, useEffect } from 'react';
import HomeScreen from './home.screen';
import { getAllProducts } from '../../utils/fakeStoreApi';

const HomeController = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const fetchAllProducts = async () => {
    const products = await getAllProducts(30);

    setProducts(products);
    setIsLoadingProducts(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleSelectProduct = (product: any) => {
    navigation.navigate('Product', {
      selectedProduct: product,
    });
  };

  const handlers = {
    products,
    isLoadingProducts,
    handleSelectProduct,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
