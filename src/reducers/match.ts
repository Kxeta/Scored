import { types } from '../actions/match';
import { ACTION } from '../types/action';
import { MATCH } from '../types/match';
const initialState = {
    loading: false,
    list: [],
}

export const match = (state = initialState, action: ACTION<MATCH[]>) => {
    switch (action.type) {
        case types.FETCHING_MATCH:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_MATCH:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}