import React, { useState, useEffect } from 'react';
import ProductListScreen from './productList.screen';
import { getProductsInCategory } from '../../utils/fakeStoreApi';

const ProductListController = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const fetchProductsInCategory = async () => {
    const selectedCategory = route.params?.selectedCategory;
    const products = await getProductsInCategory(selectedCategory);

    setProducts(products);
    setIsLoadingProducts(false);
  };

  useEffect(() => {
    fetchProductsInCategory();
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

  return <ProductListScreen handlers={handlers} />;
};

export default ProductListController;
