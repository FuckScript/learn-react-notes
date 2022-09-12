import {CHANGE_COUNT} from './constants';

const initalState = {
  count: 100,
  banners: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return {...state, count: state.count + action.count};
    default:
      return state;
  }
}

export default reducer;
