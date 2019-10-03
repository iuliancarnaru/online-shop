import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import Header from "./components/header";
import SignInSignUp from "./pages/sign-in-sign-up"

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}
export default App;
