import { Dispatch } from 'react';
import { fetchTeams } from '../service';
import { TEAM } from '../types/team';

export const types = {
    FETCHING_TEAM: 'FETCHING_TEAM',
    LOAD_TEAM: 'LOAD_TEAM'
}

export const fetchingTeams = () => ({
    type: types.FETCHING_TEAM
})

export const loadTeams = (teams: TEAM[]) => ({
    type: types.LOAD_TEAM,
    payload: teams
})

/**
 * Fetches the teams list based on a country id and loads into the store
 * @param countryId 
 * @returns 
 */
export const fetchTeamsData = (countryId: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingTeams)
        const response = await fetchTeams(countryId)
        dispatch(loadTeams(response.data))
        if (response.error) {
            console.error(response.error)
        }
    }
}