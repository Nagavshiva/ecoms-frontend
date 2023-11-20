import axios from 'axios';

const url = 'https://ecoms-backend.onrender.com';

const adminService = {
    fetchAllUsers: async (token) => {
        return await axios.get(`${url}/api/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
    },
    deleteUserById: async (token,userId) => {
        await axios.delete(`${url}/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
    },
    addProduct: async (productData,token) => {
        return await axios.post(`${url}/api/product`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }, productData)
    },
    updateProductById: async (token,id,updatedProductData) => {
        return await axios.put(`${url}/api/product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }, updatedProductData);
    },
    deleteProductById: async (token,id) => {
        return await axios.delete(`${url}/api/product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });
    },
    removeProductReview: async (token,productId,reviewId) => {
        return await axios.delete(`${url}/api/product/${productId}/${reviewId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });
    },
}

export default adminService;