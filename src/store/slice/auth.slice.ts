import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/http";
import AuthService from "@/services/auth.service";
import type { AuthResponse } from "@/types/AuthResponce";
import type { IUser } from "@/types/IUser";

const initialState = {
  user: {} as IUser,
  isLoading: false,
  isAuth: false,
};

export const login = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>("user/login", async ({ email, password }) => {
  const response = await AuthService.login(email, password);
  localStorage.setItem("token", response.data.accessToken);
  return response.data.user;
});

export const registration = createAsyncThunk<
  IUser,
   {email: string, password: string} ,
  { rejectValue: string }
>("user/registration", async ( {email, password} ) => {
  const response = await AuthService.registration(email, password);
  localStorage.setItem("token", response.data.accessToken);
  return response.data.user;
});

export const logout = createAsyncThunk<
  void
>("user/logout", async () => {
  await AuthService.logout();
  localStorage.removeItem('token');
});

export const checkAuth = createAsyncThunk<
IUser
>("user/checkAuth", async () => {
  const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
  localStorage.setItem('token', response.data.accessToken);
  return response.data.user
});


const productSlice = createSlice({
  name: `auth`,
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state)=>{ 
      AuthService.logout().then(()=>{ 
        
      })
      localStorage.removeItem('token');
      state.isAuth = false;
      state.user = {} as IUser
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {} as IUser
      })
      .addCase(checkAuth.pending , (state, action) => {
        state.isLoading = true
      })
      .addCase(checkAuth.rejected , (state)=>{ 
        state.isLoading = false
      })
      .addCase(checkAuth.fulfilled , (state, action) => {
        state.isLoading = false
        state.isAuth = true
        state.user = action.payload
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = productSlice;

export default reducer;

export const { setAuth, setLoading, setUser } = actions;
