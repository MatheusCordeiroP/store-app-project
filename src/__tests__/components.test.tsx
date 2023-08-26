import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StarRating from '../components/StarRating';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';

describe('CategoryItem component', () => {
  it('displays the category name', () => {
    const item = 'Test Category';
    const { getByText } = render(
      <CategoryItem item={item} onPressItem={() => {}} />
    );

    const categoryName = getByText(item);
    expect(categoryName).toBeTruthy();
  });

  it('calls onPressItem when pressed', () => {
    const item = 'Test Category';
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CategoryItem item={item} onPressItem={onPressMock} />
    );

    const categoryContainer = getByText(item).parent;
    fireEvent.press(categoryContainer);
    expect(onPressMock).toHaveBeenCalledWith(item);
  });
});

describe('ProductItem component', () => {
  it('displays product title and price', () => {
    const item = {
      title: 'Test Product',
      price: 39.99,
      image: 'https://example.com/test-image.jpg',
    };
    const { getByText } = render(
      <ProductItem item={item} onPressItem={() => {}} />
    );

    const titleElement = getByText(item.title);
    const priceElement = getByText(`$${item.price.toFixed(2)}`);

    expect(titleElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });

  it('calls onPressItem when pressed', () => {
    const item = {
      title: 'Test Product',
      price: 39.99,
      image: 'https://example.com/test-image.jpg',
    };
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ProductItem item={item} onPressItem={onPressMock} />
    );

    const productContainer = getByText(item.title);
    fireEvent.press(productContainer);
    expect(onPressMock).toHaveBeenCalledWith(item);
  });
});

describe('StarRating component', () => {
  it('displays the rating and count properly', () => {
    const { getByText } = render(<StarRating count={230} rate={4.8} />);
    const ratingText = getByText('4.8');
    const countText = getByText('(230 avaliações)');

    expect(ratingText).toBeTruthy();
    expect(countText).toBeTruthy();
  });

  it('renders stars with and without params for color and size', () => {
    render(<StarRating count={100} rate={3.2} />);
    render(<StarRating count={100} rate={3.2} color="red" size={32} />);
  });
});
