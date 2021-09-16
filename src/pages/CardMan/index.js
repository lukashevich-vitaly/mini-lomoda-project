import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const CardMan = () => {
    const cards = useSelector((state) => {return state.cards});
    let { id } = useParams();

    const findCardById = (id) => {
        return cards.find(card => card.id === id);
      };

    let card = findCardById(id);

    return (
        <section className="card-good" key={card.id}>
            <div className="container card-good__wrapper">
                <div className="card-good__image-wrapper">
                    <img className="card-good__image" src={`/images/${card.photo}`} alt="" />
                </div>
                <div className="card-good__description">
                    <h2 className="card-good__title-wrapper">
                        <p className="card-good__brand">{card.brand}</p>
                        <p className="card-good__title">{card.name}</p>
                    </h2>
                    <p className="card-good__price">{card.cost} BYN</p>

                    <div className="card-good__color-wrapper card-good__select__wrapper">
                        <button className="card-good__color card-good__select">Черный</button>
                        <ul className="card-good__color-list card-good__select-list">
                            <li className="card-good__select-item">Черный</li>
                            <li className="card-good__select-item">Белый</li>
                            <li className="card-good__select-item">Красный</li>
                            <li className="card-good__select-item">Зеленый</li>
                            <li className="card-good__select-item">Синий</li>
                            <li className="card-good__select-item">Желтый</li>
                        </ul>
                    </div>
                    
                    <div className="card-good__sizes-wrapper card-good__select__wrapper">
                        <button className="card-good__sizes card-good__select">Выберите размер</button>
                        <ul className="card-good__sizes-list card-good__select-list">
                            <li className="card-good__select-item">36</li>
                            <li className="card-good__select-item">38</li>
                            <li className="card-good__select-item">40</li>
                            <li className="card-good__select-item">42</li>
                            <li className="card-good__select-item">44</li>
                            <li className="card-good__select-item">46</li>
                            <li className="card-good__select-item">48</li>
                            <li className="card-good__select-item">50</li>
                            <li className="card-good__select-item">52</li>
                        </ul>
                    </div>
                    

                    <button className="card-good__buy">Добавить в корзину</button>
                </div>
            </div>


        </section>
    );
};

export default CardMan;