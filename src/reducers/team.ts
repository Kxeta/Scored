import { types } from '../actions/team';
import { ACTION } from '../types/action';
import { TEAM } from '../types/team';
const initialState = {
    loading: false,
    list: []
}

export const team = (state = initialState, action: ACTION<TEAM[]>) => {
    switch (action.type) {
        case types.FETCHING_TEAM:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_TEAM:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}