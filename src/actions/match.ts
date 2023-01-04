import { Dispatch } from 'react';
import { fetchMatches } from '../service';
import { MATCH } from '../types/match';
export const types = {
    FETCHING_MATCH: 'FETCHING_MATCH',
    LOAD_MATCH: 'LOAD_MATCH'
}

export const fetchingMatches = () => ({
    type: types.FETCHING_MATCH
})

export const loadMatches = (matches: MATCH[]) => ({
    type: types.LOAD_MATCH,
    payload: matches
})


/**
 * Fetches the matches list based on the following params and then loads into the store
 * @param seasonId 
 * @param statusCode 
 * @param dateFrom 
 * @param dateTo 
 * @returns Action creator
 */
export const fetchMatchesData = (seasonId: number, statusCode: number | null = null, dateFrom: string | null = null, dateTo: string | null = null) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingMatches)
        const response = await fetchMatches(seasonId, statusCode, dateFrom, dateTo)
        dispatch(loadMatches(response.data))
        if (response.error) {
            console.error(response.error)
        }
    }
}