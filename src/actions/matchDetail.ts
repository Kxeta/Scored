import { MATCH } from '../types/match';
import { fetchMatch } from '../service/index';
import { Dispatch } from 'react';
export const types = {
    FETCHING_MATCH_DETAILS: 'FETCHING_MATCH_DETAILS',
    LOAD_MATCH_DETAILS: 'LOAD_MATCH_DETAILS'
}

export const fetchingMatchDetails = () => ({
    type: types.FETCHING_MATCH_DETAILS
})

export const loadMatchInfo = (match: {[id: number]: MATCH | {}}) => ({
    type: types.LOAD_MATCH_DETAILS,
    payload: match
})

/**
 * Fetches the match details based on a match id and loads into the store
 * @param matchId 
 * @returns Action Creator
 */
export const fetchMatchInfoData = (matchId: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingMatchDetails)
        const response = await fetchMatch(matchId)
        dispatch(loadMatchInfo({[matchId]: response.data}))
        if (response.error) {
            console.error(response.error)
        }
    }
}