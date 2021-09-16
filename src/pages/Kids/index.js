import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Kids = () => {
   
    const cards = useSelector((state) => {return state.cards});
    const cardsKids = cards.filter(function (card) {return card.category === "kids"});
    
    return (
        <div className="container">
            <h2 className="goods__title">Детям </h2>
            <ul className="goods__list">
            {cardsKids.map((cardKids) => {
        return (
                    <li className="goods__item">
                        <article className="good">
                            <Link className="good__link-img" to={`/kids/${cardKids.id}`} key={cardKids.id}>
                                <img className="good__img" src={"images/"+cardKids.preview} alt="" />
                            </Link>
                            <div className="good__description">
                                <p className="good__price"> {cardKids.cost} BYN </p>
                                <h3 className="good__title"> {cardKids.brand} <span className="good__title__grey">/ {cardKids.name}</span></h3>
                                <p className="good__sizes">Размеры (RUS): <span className="good__sizes-list">{cardKids.sizes.join(', ')}</span></p>
                                <Link className="good__link" to={`/kids/${cardKids.id}`} key={cardKids.id}>Подробнее</Link>
                            </div>
                        </article>
                    </li>
                
        
        )
    })}
    </ul>
          </div> )
                
};

export default Kids;