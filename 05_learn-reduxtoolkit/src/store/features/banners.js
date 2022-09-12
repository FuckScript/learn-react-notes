import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBannersAction = createAsyncThunk(
  'fetch/banners',
  async (extraArgs, {dispatch, getState}) => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata');
    const banners = res.data.data.banner.list;
    // 异步修改方式1
    // dispatch(changeBanners(banners));
    return banners;
  }
);

const bannersSlice = createSlice({
  name: 'banners',
  initialState: {
    banners: [],
  },
  reducers: {
    changeBanners(state, {payload}) {
      console.log(payload);
      state.banners = payload;
    },
  },
  extraReducers: {
    // 异步修改方式2(特别推荐)
    [fetchBannersAction.pending]() {},
    [fetchBannersAction.fulfilled](state, {payload}) {
      state.banners = payload;
    },
    [fetchBannersAction.rejected]() {}
  },
});

// const {changeBanners} = bannersSlice.actions;

export default bannersSlice.reducer;
