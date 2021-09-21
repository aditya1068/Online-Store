import React, { Component } from "react";
import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as  Router} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
class App extends Component {
  render() {
    return(
      <Router>
        
          
          <Switch>
            <Route path ="/" exact component ={
              () => (<ProductsList></ProductsList>)
            } />

            <Route path ="/details" exact component ={
              () => (<Details></Details>)
             } />

            <Route path ="/cart" exact component ={
              () => (<Cart></Cart>)
            } />

              <Route  component ={
              () => (<Default></Default>)
            } />  

              </Switch>
            <Modal />
            
  </Router>
    );
  }
}
        
export default App;
