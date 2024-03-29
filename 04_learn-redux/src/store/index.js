import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counter';
import homeReducer from './home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

// export default createStore(reducer, applyMiddleware(thunk));
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
