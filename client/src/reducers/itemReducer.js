import uuid from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../types/itemTypes';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
    ]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:{
            return {
                ...state
            };
        };
        case ADD_ITEM:{
            return {

            };
        };
        default: return state;
    }
}