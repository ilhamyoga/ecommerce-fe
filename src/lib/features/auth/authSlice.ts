import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../utils/api";
import { getCookie, setCookie } from 'cookies-next';

interface AuthState {
  isLoading: boolean;
  isLogin: boolean;
  data: {[key: string]: any};
}

const initialState: AuthState = {
  isLoading: false,
  isLogin: !!getCookie('auth_token'),
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    login: (state, action) => {
      state.isLogin = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.data = {};
    },
  },
});

export const { setLoading, login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const loginAction = (payload: any) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await loginApi({
      email: payload.email,
      password: `${payload.password}salt_pass`,
    });
    const data = response.data;

    // set cookie
    setCookie('accessToken', data.data.accessToken);

    dispatch(login(data.data));
    redirect('/');
  } catch (error: any) {
    alert(error?.response?.data?.message || "Terjadi kesalahan");
  } finally {
    dispatch(setLoading(false));
  }
}