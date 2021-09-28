import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const ModalBasket = (props) => {
    const dispatch = useDispatch();
    const goods = useSelector((state) => {return state.basket});
    const totalPrice = goods.reduce((a,b) => a + b.cost, 0);
    const promo = useSelector((state) => {return state.promo});
    const percent = 30;
    const sale = percent/100;

    const onChangePromo = (event) => {
        dispatch({
            type: 'CHANGE_PROMO',
            payload: event.target.value
          })
    };

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
                        {goods.length === 0 &&
                        <tr>
                            <td>-</td>
                            <td>Товары отсутствуют, корзина пуста</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td><button className="btn-delete">&times;</button></td>
                        </tr>}
                        {goods.length > 0 && goods.map(good => {
                            return (
                                <tr>
                                    <td>{goods.indexOf(good) + 1}</td>
                                    <td>{good.name} {good.brand}</td>
                                    <td>{good.color ? good.color[0] : '-'}</td>
                                    <td>{good.sizes ? good.sizes[0] : '-'}</td>
                                    <td>{good.cost} BYN</td>
                                    <td><button className="btn-delete" onClick={() => { dispatch({
                                        type: 'DELETE_FROM_BASKET',
                                        payload: good.id 
                                        })
                                    }}>&times;</button></td>
                                </tr>  
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3">
                                <div className="cart__wrapper-promo">
                                    <label for="promo">Промо-код:</label>
                                    <input className="cart__promo" id="promo" value={promo} onChange = {onChangePromo} type="text" />
                                </div>
                            </th>
                            <th>Итого:</th>
                            <th className="cart__total-cost" colspan="2">{promo === 'TeachMeSkills' ? (totalPrice - totalPrice*sale) : totalPrice} BYN</th>
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