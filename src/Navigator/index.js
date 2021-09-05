import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../scss/style.scss';
import Main from '../pages/Main';
import logoLomoda from '../image/logo.svg';
import Header from '../components/Header';



const Navigator = () => {
  return (
    <Router>
      <Header />
      
      <section className="subheader">
            <div className="container">
                <div className="subheader__wrapper">
                    <nav className="subheader__navigation navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item"><a className="navigation__link" href="goods.html#women">Женщинам</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="goods.html#men">Мужчинам</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="goods.html#kids">Детям</a></li>
                        </ul>
                    </nav>
                    <Link to="/" className="subheader__logo"> <img src={logoLomoda} alt="Компания Lomoda" /> </Link>
                    <button className="subheader__cart">Корзина</button>
                </div>
            </div>
        </section>

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