import {createSlice} from '@reduxjs/toolkit';

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 1207,
  },
  reducers: {
    changeCount(state, {payload}) {
      state.count += payload;
    },
  },
});

export const {changeCount} = counterReducer.actions;
export default counterReducer.reducer;
