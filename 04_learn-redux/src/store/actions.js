import {CHANGE_BANNERS, CHANGE_COUNT} from './constants';

export const changeCountAction = (count) => ({type: CHANGE_COUNT, count});
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});
