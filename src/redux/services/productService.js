import axios from 'axios';

const url = "http://localhost:8080";


const productService = {
    getAllProducts: async () => {
        return await axios.get(`${url}/api/product`)
    },
    getProductById: async (id) => {
        return await axios.get(`${url}/api/products/${id}`)
    },
    createProductReview: async (token,productId, reviewData) => {
        return await axios.post(`${url}/api/product/reviews/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }, reviewData);
    },
}
export default productService;