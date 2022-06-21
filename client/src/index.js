import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { productReducer } from './store/reducers/product';
import { orderReducer } from './store/reducers/order';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './store/reducers/user';

 let myStore = createStore(combineReducers({ p: productReducer, u: userReducer, o: orderReducer })
 , composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    {/* מעבירה לריאקט את הניהול של הניתובים */}
    <Provider store={myStore}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
