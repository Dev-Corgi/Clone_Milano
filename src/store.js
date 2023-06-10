import { configureStore, createSlice } from "@reduxjs/toolkit";

const cursorStateSlice = createSlice({
  name: "cursorState",
  initialState: "normal",
  reducers: {
    setCursorState: (state, action) => action.payload
  },
});
export const { setCursorState } = cursorStateSlice.actions;

const cursorModeSlice = createSlice({
    name: "cursorMode",
    initialState: "normal",
    reducers: {
      setCursorMode: (state, action) => action.payload
    },
  });
  export const { setCursorMode } = cursorModeSlice.actions;

const store = configureStore({
  reducer: {
    cursorState: cursorStateSlice.reducer,
    cursorMode: cursorModeSlice.reducer,
  },
});

export default store;