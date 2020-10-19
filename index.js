import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import {Provider} from 'react-redux';
import mainReducer from './mainReducer.js'


import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

const store = createStore(mainReducer,applyMiddleware(thunk));

ReactDOM.render((<Provider store ={store}>
<App/>
</Provider>
),document.getElementById('app'));