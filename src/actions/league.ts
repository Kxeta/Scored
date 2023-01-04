import { Dispatch } from 'react';
import { fetchLeagues } from '../service';
import { LEAGUE } from '../types/league';
export const types = {
    FETCHING_LEAGUES: 'FETCHING_LEAGUES',
    LOAD_LEAGUES: 'LOAD_LEAGUES'
}

export const fetchingLeagues = () => ({
    type: types.FETCHING_LEAGUES
})

export const loadLeagues = (leagues: LEAGUE[]) => ({
    type: types.LOAD_LEAGUES,
    payload: leagues
})

/**
 * Fetches the league list based on a country id and loads into the store
 * @param countryId 
 * @returns Action Creator
 */
export const fetchLeaguesData = (countryId: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingLeagues)
        const response = await fetchLeagues(countryId)
        dispatch(loadLeagues(response.data))
        if (response.error) {
            console.error(response.error)
        }
    }
}