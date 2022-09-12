import {CHANGE_BANNERS} from './constants';

const initalState = {
  banners: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return {...state, banners: action.banners};
    default:
      return state;
  }
}

export default reducer;
