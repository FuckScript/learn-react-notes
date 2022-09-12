import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counter';
import bannersReducer from './benners';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  counter: counterReducer,
  banners: bannersReducer,
});

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
