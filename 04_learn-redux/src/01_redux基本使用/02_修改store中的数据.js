const store = require('./store');

const nameAction = {type: 'change_name', name: 'Kiana'};

store.dispatch(nameAction);
console.log(store.getState());

const levelAcion = {type: 'change_level', level: 101};
store.dispatch(levelAcion);
console.log(store.getState());
