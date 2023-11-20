// productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (searchParams) => {
  console.log('Search Params:', searchParams);
  const response = await productService.getAllProducts(searchParams);
  console.log('API Response:', response);
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  const response = await productService.getProductById(id);
  return response.data;
});

export const createProductReview = createAsyncThunk('products/createProductReview', async ({ token, productId, reviewData }) => {
  const response = await productService.createProductReview(token, productId, reviewData);
  return response.data;
});
