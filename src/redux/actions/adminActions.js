import { createAsyncThunk } from '@reduxjs/toolkit';
import adminService from '../services/adminService';

//  Fetch all users
export const fetchAllUsers = createAsyncThunk('admin/fetchAllUsers', async (token) => {
  const response = await adminService.fetchAllUsers(token);
  return response.data;
});

// Delete a user by ID
export const deleteUserById = createAsyncThunk('admin/deleteUserById', async ({ userId, token }) => {
  await adminService.deleteUserById(userId, token);
  return userId; // Return the deleted userId for updating the state
});

export const addProduct = createAsyncThunk('products/addProduct', async (productData,token) => {
  const response = await adminService.addProduct(productData,token);
  return response.data;
});
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, updatedProductData, token}) => {
  const response = await adminService.updateProductById(id, updatedProductData,token);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id,token) => {
  const response = await adminService.deleteProductById(id,token);
  return response.data;
});

export const removeProductReview = createAsyncThunk('products/removeProductReview', async ({ productId, reviewId,token }) => {
  const response = await adminService.removeProductReview(productId, reviewId,token);
  return response.data;
});

