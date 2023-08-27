import React, { ReactNode } from 'react';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
};

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; id: number };

export type CartContextType = {
  cartState: CartItem[];
  dispatch: React.Dispatch<CartAction>;
};

export type CartProviderProps = {
  children: ReactNode;
};
