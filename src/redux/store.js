import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user_information from './reducers/user';

const reducer = combineReducers({
    user_information
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;