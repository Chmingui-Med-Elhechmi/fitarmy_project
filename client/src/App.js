import React from "react";
import { Route, Switch } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import TraineeProfile from "./components/Profile/TraineeProfile";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Produit from "./components/Produit";
import SignUp from "./components/SignUp";
import IndividualExpert from "./components/IndividualExpert";
import ReserveExpert from "./components/ReserveExpert";
import FitArmy from "./components/FitArmy";
import Products from "./components/Products/Products";
import Dashboard from "./components/adminDash/dashboard";
// import FitArmy from "./components/FitArmy";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/price" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/produit" component={Products} />
        <Route path="/register" component={SignUp} />
        <Route path="/error" component={ErrorPage} />
        <Route exact path="/staff/:id" component={IndividualExpert} />
        <Route exact path="/staff/:id/reserve" component={ReserveExpert} />
        <Route path="/fitarmy" component={FitArmy} />
        <Route path="/profile/:id" component={TraineeProfile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
