import {CHANGE_COUNT, CHANGE_BANNERS} from './constants';

const initalState = {
  count: 100,
  banners: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return {...state, count: state.count + action.count};
    case CHANGE_BANNERS:
      return {...state, banners: action.banners};
    default:
      return state;
  }
}

export default reducer;
