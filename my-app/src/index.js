import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GeneralAPP from "./App";

ReactDOM.render(
    <GeneralAPP/>, document.getElementById('root'));

serviceWorker.unregister();