const store = require('./store');
const {changeNameAction} = require('./store/actions');

// 当state中的数据发生改变会自动回调subscribe传入的函数
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeNameAction('Kiana'));
