import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewProduct = createAsyncThunk(
  "product/addnewProduct",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.Product("/product/addProduct", info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getProducts());
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message
          ? error.response.data.message
          : error.response.data.errors.password.msg
      );
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/product/update/${info.id}`, info.data, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getProducts());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.get("/product/");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "Product/getSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/product/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(`/product/${info.id}`, info.data, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getProducts());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
    loading: false,
    productErrors: null,
    productsErrors: null,
  },
  extraReducers: {
    [addNewProduct.pending]: (state) => {
      state.loading = true;
    },
    [addNewProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productErrors = null;
    },
    [addNewProduct.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.productsErrors = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getSingleProduct.pending]: (state) => {
      state.loading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.productsErrors = null;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default productSlice.reducer;
