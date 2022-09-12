import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
  },
  reducers: {
    changeCount: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
  },
});

export const {changeCount} = counterSlice.actions;
export default counterSlice.reducer;
