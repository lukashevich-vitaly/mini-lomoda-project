import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Women = () => {
   
    const cards = useSelector((state) => {return state.cards});
    const cardsWomen = cards.filter(function (card) {return card.category === "women"});

    return (
        <div className="container">
            <h2 className="goods__title">Женщинам </h2>
            <ul className="goods__list">
            {cardsWomen.map((cardWomen) => {
        return (
                    <li className="goods__item">
                        <article className="good">
                            <Link className="good__link-img" to={`/women/${cardWomen.id}`} key={cardWomen.id}> 
                                <img className="good__img" src={`images/${cardWomen.preview}`} alt={`${cardWomen.name}`} />
                            </Link>
                            <div className="good__description">
                                <p classNsme="good__price"> {cardWomen.cost} BYN </p>
                                <h3 className="good__title"> {cardWomen.brand} <span className="good__title__grey">/ {cardWomen.name}</span></h3>
                                <p className="good__sizes">Размеры (RUS): <span className="good__sizes-list">{cardWomen.sizes.join(', ')}</span></p>
                                <Link className="good__link" to={`/women/${cardWomen.id}`} key={cardWomen.id}>Подробнее</Link>
                            </div>
                        </article>
                    </li>
        )
            })}
    </ul>
          </div>
    )            
};

export default Women;