import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../scss/style.scss';
import Main from '../pages/Main';
import Header from '../components/Header';
import Section from "../components/Section";



const Navigator = () => {
  return (
    <Router>
      <Header />
      <Section />

      <div>
        {/*<nav className='navigation-links'>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/posts">Женщинам</Link>
            </li>
            <li>
              <Link to="/login">Мужчинам</Link>
            </li>
            <li>
              <Link to="/login">Детям</Link>
            </li>
          </ul>
            </nav>*/}

        <Switch>
          <Route path="/posts">
            {/*<Posts />*/}
          </Route>
          <Route path="/login">
            {/*<Login />*/}
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigator;