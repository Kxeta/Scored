import { types } from '../actions/country';
import { ACTION } from '../types/action';
import { COUNTRY } from '../types/country';
const initialState = {
    loading: false,
    list: []
}

export const country = (state = initialState, action: ACTION<COUNTRY[]>) => {
    switch (action.type) {
        case types.FETCHING_COUNTRIES:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_COUNTRIES:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}