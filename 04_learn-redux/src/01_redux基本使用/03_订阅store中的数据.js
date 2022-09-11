const store = require('./store');

// 当state中的数据发生改变会自动回调subscribe传入的函数
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'change_name', name: 'Kiana'});
store.dispatch({type: 'change_level', level: 101});
