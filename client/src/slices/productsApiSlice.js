import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: PRODUCTS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Product"], // stops it from being cached
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `${PRODUCTS_URL}/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    uploadProductImage: builder.mutation({
      query: (formData) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: formData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
    }),
    createReview: builder.mutation({
      query: (review) => ({
        url: `${PRODUCTS_URL}/${review.productId}/reviews`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Naming Convention: 'use' + [Query Endpoint Name] + 'Query'
// Naming Convention: 'use' + [Mutation Endpoint Name] + 'Mutation'
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice;
