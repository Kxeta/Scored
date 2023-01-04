import { Dispatch } from 'react';
import { fetchSeasons } from '../service';
import { SEASON } from '../types/season';
export const types = {
    FETCHING_SEASONS: 'FETCHING_SEASONS',
    LOAD_SEASONS: 'LOAD_SEASONS'
}

export const fetchingSeasons = () => ({
    type: types.FETCHING_SEASONS
})

export const loadSeasons = (seasons: SEASON[]) => ({
    type: types.LOAD_SEASONS,
    payload: seasons
})

/**
 * Fetches the seasons list based on a league id and loads into the store
 * @param leagueId 
 * @returns 
 */
export const fetchSeasonsData = (leagueId: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingSeasons)
        const response = await fetchSeasons(leagueId)
        dispatch(loadSeasons(response.data))
        if (response.error) {
            console.error(response.error)
        }
    }
}