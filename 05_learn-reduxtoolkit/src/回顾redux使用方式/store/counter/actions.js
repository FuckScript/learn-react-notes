import {CHANGE_COUNT, CHANGE_BANNERS} from './constants';
import axios from 'axios';

export const changeCountAction = (count) => ({type: CHANGE_COUNT, count});
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const fetchBanners = () => {
  return function (dispatch, getState) {
    axios.get('http://123.207.32.32:8000/home/multidata').then(({data}) => {
      const banners = data.data.banner.list;
      dispatch(changeBannersAction(banners));
    });
  };
};
