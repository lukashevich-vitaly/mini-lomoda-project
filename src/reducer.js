import db from './db.json';

const initialState = {
    cards: db,
    city: 'Укажите свой город',
    modalBasket: false
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

    return state;
};

export default reducer;