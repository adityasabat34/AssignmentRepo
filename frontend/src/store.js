import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import {
  porductListReducer,
  productDetailsReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
  producList: porductListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
