import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STRIVE_AUTH = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxYzgwN2QwYjM3MTAwMWFhODk0YTEiLCJpYXQiOjE3MTUxMDA0MDAsImV4cCI6MTcxNjMxMDAwMH0.awm-TsZJX_k9vGfjTNagxOIw8wFNCB44L9IP6MjkC_k",
};

const initialState = {
  isLoading: false,
  data: [],
  response: "",
};

export const getAllData = createAsyncThunk("data/GET", async (options = {}) => {
  const endpoint = options.endpoint;
  const requestOptions = {
    method: options.method || "GET",
    headers: options.headers || STRIVE_AUTH,
    ...options,
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const fetchApiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const isLoadingState = (state) => state.dataState.isLoading;
export const allData = (state) => state.dataState.data;
export const isErrorState = (state) => state.dataState.response;
export default fetchApiSlice.reducer;
