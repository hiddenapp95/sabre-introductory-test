import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/components/app';
import {Provider} from "react-redux";
import store from "./store"

export default ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
