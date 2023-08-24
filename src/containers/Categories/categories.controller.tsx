import React, { useState, useEffect } from 'react';
import CategoriesScreen from './categories.screen';
import { getAllCategories } from '../../utils/fakeStoreApi';

const CategoriesController = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    const categoriesData = await getAllCategories();

    setCategories(categoriesData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSelectCategory = (category: string) => {
    navigation.navigate('ProductList', {
      selectedCategory: category,
    });
  };

  const handlers = {
    categories,
    isLoading,
    handleSelectCategory,
  };

  return <CategoriesScreen handlers={handlers} />;
};

export default CategoriesController;
