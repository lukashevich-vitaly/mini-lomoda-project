import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from '../pages/Main';
import Header from '../components/Header';
import Section from "../components/Section";
import Footer from "../components/Footer";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import CardWoman from "../pages/CardWoman";
import CardMan from "../pages/CardMan";
import CardKid from "../pages/CardKid";

const Navigator = () => {

  return (
    <Router>
      <Header />
      <Section />
      <div>
        <Switch>
          <Route path={"/women/:id"} component={CardWoman} />
          <Route path={"/men/:id"} component={CardMan} />
          <Route path={"/kids/:id"} component={CardKid} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/kids" component={Kids} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Navigator;