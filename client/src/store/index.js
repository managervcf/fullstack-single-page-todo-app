import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

// Initialize redux store with reducer and thunk
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
