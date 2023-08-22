import axios from 'axios';
import { API_URL } from '../config';
import { CartType } from './types';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});

const get = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const getAllProducts = async (limit: number, offset: number) => {
  if (!Number.isInteger(limit) || !Number.isInteger(offset)) {
    throw new Error('Invalid limit or offset. Expected an integer.');
  }

  try {
    const response = await instance.get(`${API_URL}/products?limit=${limit}`);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const getProduct = async (id: number) => {
  if (!Number.isInteger(id)) {
    throw new Error('Invalid id. Expected an integer.');
  }

  try {
    const response = await instance.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const getAllCategories = async () => {
  try {
    const response = await instance.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const getCategory = async (name: string) => {
  try {
    const response = await instance.get(
      `${API_URL}/products/categories/${name}`
    );
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const getCart = async (userId: number) => {
  if (!Number.isInteger(userId)) {
    throw new Error('Invalid userId. Expected an integer.');
  }

  try {
    const response = await instance.get(`${API_URL}/carts?userId=${userId}`);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const updateCart = async (userId: number, data: CartType) => {
  try {
    const response = await instance.put(
      `${API_URL}/carts?userId=${userId}`,
      data
    );
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

export {
  get,
  getAllProducts,
  getProduct,
  getAllCategories,
  getCategory,
  getCart,
  updateCart,
};
