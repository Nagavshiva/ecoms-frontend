import { createSlice } from '@reduxjs/toolkit';
import * as productActions from '../actions/productActions';
import * as adminActions from '../actions/adminActions';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        selectedProduct: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(productActions.fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(productActions.fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(productActions.fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(productActions.fetchProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(productActions.fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(productActions.fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            
            .addCase(adminActions.addProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminActions.addProduct.fulfilled, (state, action) => {
                state.loading = false;
                // Optionally update the state with the added product if needed
                state.products.push(action.payload);
            })
            .addCase(adminActions.addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(adminActions.updateProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminActions.updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                // Optionally update the state with the updated product if needed
                // Find the index of the updated product in the products array
                const index = state.products.findIndex((product) => product._id === action.payload._id);

                if (index !== -1) {
                    // Update the product details in the array
                    state.products[index] = action.payload;
                }
            })
            .addCase(adminActions.updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(adminActions.deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminActions.deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                // Optionally update the state by removing the deleted product if needed
                // Filter out the deleted product from the products array
                state.products = state.products.filter(product => product._id !== action.payload._id);
            })
            .addCase(adminActions.deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(productActions.createProductReview.pending, (state) => {
                state.loading = true;
            })
            .addCase(productActions.createProductReview.fulfilled, (state, action) => {
                state.loading = false;
                // Optionally update the state with the added review if needed
                // Find the index of the product in the products array
                const index = state.products.findIndex((product) => product._id === action.payload.productId);

                if (index !== -1) {
                    // Add the newly created review to the product's reviews array
                    state.products[index].reviews.push(action.payload.review);

                    // Optionally update other properties of the product (e.g., average rating, number of reviews)
                }
                // Save user data to local storage
                localStorage.setItem("products", JSON.stringify(action.payload));
            })
            .addCase(productActions.createProductReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(adminActions.removeProductReview.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminActions.removeProductReview.fulfilled, (state, action) => {
                state.loading = false;
                // Optionally update the state by removing the deleted review if needed
                // Find the index of the product in the products array
                const index = state.products.findIndex((product) => product._id === action.payload.productId);

                if (index !== -1) {
                    // Filter out the deleted review from the product's reviews array
                    state.products[index].reviews = state.products[index].reviews.filter(
                        (review) => review._id !== action.payload.reviewId
                    );

                    // Optionally update other properties of the product (e.g., average rating, number of reviews)
                }
            })
            .addCase(adminActions.removeProductReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
