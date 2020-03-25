import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';


const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk, axiosMiddleware(client))));