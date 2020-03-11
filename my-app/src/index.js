
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         addMesssage={store.addMessage.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}
    />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store._callSubscriber(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();