import { createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await productService.getAllProducts();
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  const response = await productService.getProductById(id);
  return response.data;
});

export const createProductReview = createAsyncThunk('products/createProductReview', async ({ productId, reviewData }) => {
  const response = await productService.createProductReview(productId, reviewData);
  return response.data;
});
