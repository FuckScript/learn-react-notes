import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducer, applyMiddleware(thunk));
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
