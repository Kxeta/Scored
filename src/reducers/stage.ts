import { types } from '../actions/stage';
import { ACTION } from '../types/action';
import { STAGE } from '../types/stage';
const initialState = {
    loading: false,
    list: []
}

export const stage = (state = initialState, action: ACTION<STAGE[]>) => {
    switch (action.type) {
        case types.FETCHING_STAGES:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_STAGES:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}