import { types } from '../actions/selectedFilters'
import { ACTION } from '../types/action';

const initialState = {
    country: 0,
    league: 0,
    match: 0,
    season: 0,
    stage: 0,
    team: 0,
}

export const selected = (state = initialState, action: ACTION<number>) => {
    switch (action.type) {
        case types.SELECT_COUNTRY:
            return {...state, country: action.payload}
        case types.SELECT_LEAGUE:
            return {...state, league: action.payload}
        case types.SELECT_MATCH:
            return {...state, match: action.payload}
        case types.SELECT_SEASON:
            return {...state, season: action.payload}
        case types.SELECT_STAGE:
            return {...state, stage: action.payload}
        case types.SELECT_TEAM:
            return {...state, team: action.payload}
        default:
            return state
    }
}