import db from './db.json';

const initialState = {
    cards: db,
    city: 'Укажите свой город'
};
  
const reducer = (state = initialState, action) => {
    return state
};

export default reducer;