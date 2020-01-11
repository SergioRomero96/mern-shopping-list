import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../types/itemTypes';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
}

export const addItem = (item) =>{
    return {
        type: ADD_ITEM,
        item
    }
}

export const deleteItem = (id) =>{
    return {
        type: DELETE_ITEM,
        id
    }
}