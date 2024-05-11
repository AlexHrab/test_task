import { createSlice } from "@reduxjs/toolkit";

export const initialFilter = {
  cars: { make: "" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    changeFilterName: (state, { payload }) => {
      state.make = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterName } = filterSlice.actions;
