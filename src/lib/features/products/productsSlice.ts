import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  isLoading: boolean;
  data: any[];
}

const initialState: ProductState = {
  isLoading: false,
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { setLoading, setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const getProductsAction = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(productsSlice.actions.setProducts(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};