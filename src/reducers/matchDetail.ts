import { types } from '../actions/matchDetail';
import { ACTION } from '../types/action';
import { MATCH } from '../types/match';
const initialState = {
    loading: false,
    list: {},
}

export const matchDetail = (state = initialState, action: ACTION<{[id: number]: MATCH}>) => {
    switch (action.type) {
        case types.FETCHING_MATCH_DETAILS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_MATCH_DETAILS:
            return {
                ...state,
                loading: false,
                list: {
                    ...state.list,
                    ...action.payload,
                }
            }
        default:
            return state
    }
}