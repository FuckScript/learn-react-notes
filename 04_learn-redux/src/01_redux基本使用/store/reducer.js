const {CHANGE_NAME} = require('./constants');

const initalState = {
  name: 'Qiyana',
  level: 99,
};
/**
 *
 * @param {store中目前保存的state} state
 * @param {本次需要更新的action, dispatch传入的action} action
 * @returns 返回值作为store之后存储的state
 */

function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.name};
    case 'change_level':
      return {...state, level: action.level};
    default:
      return state;
  }
}

module.exports = reducer;
