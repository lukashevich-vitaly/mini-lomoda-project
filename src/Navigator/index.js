import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../scss/style.scss';
import Main from '../components/Main';
import logo35 from '../image/35.svg';
import logoLomoda from '../image/logo.svg';



const Navigator = () => {
  return (
    <Router>
      <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <button className="header__city-button"> Укажите свой город </button>
                <div className="header__right-block">
                    <p className="header__delivery">Бесконтактная доставка</p>
                    <p className="header__pay">Платите чем хотите</p>
                    <div className="header__birthday">
                        <span>нам </span>
                        <img className="header__birthday-img" src={logo35} alt="35 лет" />
                        <span>лет!</span>
                    </div>
                </div>
            </div>
        </div>
      </header>

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