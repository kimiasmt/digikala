import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from "./ProductsList/products-list";
import ProductDetails from "./ProductDetails/product-details";
import {Provider} from "react-redux";
import {createStore} from "redux"
import store from "./redux/store";
import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import Cart from "./Cart/cart";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={ProductsList} exact/>
              </Switch>
              <Switch >
                  <Route path="/product/:id" component={ProductDetails}/>
              </Switch>
              <Switch >
                  <Route path="/cart" component={Cart}/>
              </Switch>
          <div className="App">
        </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
