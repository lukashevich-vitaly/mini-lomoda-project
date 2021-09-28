import db from './db.json';

const initialState = {
    cards: db,
    city: 'Укажите свой город',
    modalBasket: false,
    basket: []
};
  
const reducer = (state = initialState, action) => {
    if(action.type === 'OPEN_BASKET'){
        return {
            ...state,
            modalBasket: action.payload
        }
    };

    if(action.type === 'CLOSE_BASKET'){
        return {
            ...state,
            modalBasket: action.payload
        }
    };

    if(action.type === 'SELECT_CITY'){
        return {
            ...state,
            city: action.payload
        }
    };

    if(action.type === 'ADD_IN_BASKET'){
        return {
            ...state,
            basket: action.payload
        }
    };

    if(action.type === 'DELETE_FROM_BASKET'){
        return {
            ...state,
            basket: state.basket.filter((good) => good.id !== action.payload) 
        }
    };

    return state;
};

export default reducer;