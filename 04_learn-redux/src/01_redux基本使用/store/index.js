const reducer = require('./reducer');
const {createStore} = require('redux');

module.exports = createStore(reducer);
