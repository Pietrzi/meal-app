import { createStore } from 'redux';
import { comoseWithDevtools, composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;