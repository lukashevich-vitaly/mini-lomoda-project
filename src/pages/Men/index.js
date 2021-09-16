import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Men = () => {
   
    const cards = useSelector((state) => {return state.cards});
    const cardsMen = cards.filter(function (card) {return card.category === "men"});

    return (
        <div className="container">
            <h2 className="goods__title">Мужчинам </h2>
            <ul className="goods__list">
            {cardsMen.map((cardMen) => {
        return (
                    <li className="goods__item">
                        <article className="good">
                            <Link className="good__link-img" to={`/men/${cardMen.id}`} key={cardMen.id}>
                                <img className="good__img" src={"images/"+cardMen.preview} alt="" />
                            </Link>
                            <div className="good__description">
                                <p className="good__price"> {cardMen.cost} BYN </p>
                                <h3 className="good__title"> {cardMen.brand} <span className="good__title__grey">/ {cardMen.name}</span></h3>
                                <p className="good__sizes">Размеры (RUS): <span className="good__sizes-list">{cardMen.sizes}</span></p>
                                <Link className="good__link" to={`/men/${cardMen.id}`} key={cardMen.id}>Подробнее</Link>
                            </div>
                        </article>
                    </li>
                
        
        )
    })}
    </ul>
          </div> )
                
};

export default Men;