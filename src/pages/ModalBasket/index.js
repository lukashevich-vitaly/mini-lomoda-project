import React from "react";

const ModalBasket = (props) => {

    return (
        <div className={`${props.isOpened ? "cart-overlay-open" : "cart-overlay"}`}>
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            <div className="cart__table-wrapper">
                <table className="cart__table">
                    <colgroup className="cart__col">
                        <col className="cart__col-number" />
                        <col className="cart__col-name" />
                        <col className="cart__col-color" />
                        <col className="cart__col-size" />
                        <col className="cart__col-price" />
                        <col className="cart__col-delete" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="cart__title-number">#</th>
                            <th>Наименование</th>
                            <th>Цвет</th>
                            <th>Размер</th>
                            <th>Цена</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="cart__list-goods">
                        <tr>
                            <td>1</td>
                            <td>New Balance Леггинсы NB Essentials Botanical Legging</td>
                            <td>-</td>
                            <td>42/44</td>
                            <td>103 BYN</td>
                            <td><button className="btn-delete">&times;</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Adidas Костюм спортивный W TS CO ENERGIZ</td>
                            <td>-</td>
                            <td>42/44</td>
                            <td>274 BYN</td>
                            <td><button className="btn-delete">&times;</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Befree Топ Exclusive online</td>
                            <td>Фиолетовый</td>
                            <td>42</td>
                            <td>21 BYN</td>
                            <td><button className="btn-delete">&times;</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3">
                                <div className="cart__wrapper-promo">
                                    <label for="promo">Промо-код:</label>
                                    <input className="cart__promo" id="promo" type="text" />
                                </div>
                            </th>
                            <th>Итого:</th>
                            <th className="cart__total-cost" colspan="2">398 BYN</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button className="cart__btn-buy">Оформить</button>
            <button className="cart__btn-close" onClick={props.onModalClose}></button>
        </div>
    </div>
    )
};

export default ModalBasket;