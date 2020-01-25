import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import contactsReducer from "./store/reducers/contactsReducer";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    contactsReducer,
    composeEnhancers(applyMiddleware(thunk))
);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
