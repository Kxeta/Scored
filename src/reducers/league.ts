import { types } from '../actions/league';
import { ACTION } from '../types/action';
import { LEAGUE } from '../types/league';
const initialState = {
    loading: false,
    list: []
}

export const league = (state = initialState, action: ACTION<LEAGUE[]>) => {
    switch (action.type) {
        case types.FETCHING_LEAGUES:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_LEAGUES:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}