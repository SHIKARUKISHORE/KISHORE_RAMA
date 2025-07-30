import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for fruits
const fruitsSlice = createSlice({
  name: 'fruits',
  initialState: ['Apple', 'Banana', 'Mango'],
  reducers: {
    addFruit: (state, action) => {
      state.push(action.payload);  // Add new fruit
    },
    removeFruit: (state, action) => {
      return state.filter((fruit, index) => index !== action.payload);
    }
  }
});

export const { addFruit, removeFruit } = fruitsSlice.actions;

const store = configureStore({
  reducer: {
    fruits: fruitsSlice.reducer
  }
});

export default store;
