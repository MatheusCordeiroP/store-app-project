import axios from 'axios';
import { API_URL } from '../config';

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

const getProductsInCategory = async (name: string) => {
  try {
    const response = await instance.get(`${API_URL}/products/category/${name}`);

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
  getProductsInCategory,
};
