import React from "react";
import { Link } from "react-router-dom";
import '../../scss/style.scss';
import logoLomoda from '../../image/logo.svg';

const Section = () => {
    return (
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
    )
};

export default Section;