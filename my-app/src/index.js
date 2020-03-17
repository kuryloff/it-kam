
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state}
                         dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store._callSubscriber(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();