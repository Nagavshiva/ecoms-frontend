// productService.js
import axios from 'axios';

const url = "https://ecoms-backend.onrender.com";

const productService = {
  getAllProducts: async (searchParams) => {
    console.log('Search Params:', searchParams);
    return await axios.get(`${url}/api/product`, { params: searchParams });
  },
  getProductById: async (id) => {
    return await axios.get(`${url}/api/products/${id}`);
  },
  createProductReview: async (token, productId, reviewData) => {
    return await axios.post(`${url}/api/product/reviews/${productId}`, reviewData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default productService;
