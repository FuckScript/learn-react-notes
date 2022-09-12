import axios from 'axios';
import {CHANGE_BANNERS} from './constants';

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const fetchBannersAction = () => {
  return function (dispatch, getState) {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list;
      dispatch(changeBannersAction(banners));
    });
  };
};
