import { types } from '../actions/season';
import { ACTION } from '../types/action';
import { SEASON } from '../types/season';
const initialState = {
    loading: false,
    list: []
}

export const season = (state = initialState, action: ACTION<SEASON[]>) => {
    switch (action.type) {
        case types.FETCHING_SEASONS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_SEASONS:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}