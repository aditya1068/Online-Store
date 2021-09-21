import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import ProductsList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Videos from "./components/Videos";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Navbar1 />
        {/* <Switch>
            <Route path ="/" exact component ={
              () => (<ProductsList></ProductsList>)
            } />

            <Route path ="/details" exact component ={
              () => (<Details></Details>)
             } />

            <Route path ="/cart" exact component ={
              () => (<Cart></Cart>)
            } />

<Route path ="/videos" exact component ={
              () => (<Videos></Videos>)
            } />
          
   

              <Route  component ={
              () => (<Default></Default>)
            } />  

              </Switch> */}
        <Switch>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/cart">
            <Users />
          </Route>
          <Route path="/video">
            <Users />
          </Route>
          <Route path="/default">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Modal />
        <Footer /> <Footer2 />
      </Router>
    );
  }
}

export default App;
