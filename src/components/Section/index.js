import React from "react";
import { Link } from "react-router-dom";
import '../../scss/style.scss';
import logoLomoda from '../../image/logo.svg';
import { useSelector, useDispatch } from "react-redux";
import ModalBasket from "../../pages/ModalBasket";

const Section = () => {
    const dispatch = useDispatch();
    const openBasket = useSelector((state) => {return state.modalBasket});

    const onOpenBasket = () => {
      dispatch({
        type: 'OPEN_BASKET',
        payload: true 
      })
    };

    const onCloseBasket = () => {
        dispatch({
          type: 'CLOSE_BASKET',
          payload: false 
        })
      };

    return (
      <section className="subheader">
        <div className="container">
            <div className="subheader__wrapper">
                <nav className="subheader__navigation navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to="/women" className="navigation__link">Женщинам</Link></li>
                        <li className="navigation__item"><Link to="/men" className="navigation__link">Мужчинам</Link></li>
                        <li className="navigation__item"><Link to="/kids" className="navigation__link">Детям</Link></li>
                    </ul>
                </nav>
                <Link to="/" className="subheader__logo"> <img src={logoLomoda} alt="Компания Lomoda" /> </Link>
                <button className="subheader__cart" onClick={onOpenBasket}>Корзина</button>
            </div>
        </div>

        <ModalBasket
            isOpened={openBasket}
            onModalClose={onCloseBasket}
        >
        </ModalBasket>
      </section>
    )
};

export default Section;