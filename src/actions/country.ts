import { Dispatch } from 'react';
import { fetchCountries } from '../service';
import { COUNTRY } from '../types/country';
export const types = {
    FETCHING_COUNTRIES: 'FETCHING_COUNTRIES',
    LOAD_COUNTRIES: 'LOAD_COUNTRIES'
}

export const fetchingCountries = () => ({
    type: types.FETCHING_COUNTRIES
})

export const loadCountries = (countries: COUNTRY[]) => ({
    type: types.LOAD_COUNTRIES,
    payload: countries
})

// Fetches the countries list and loads into the store
export const fetchCountriesData = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchingCountries)
        const response = await fetchCountries(null)
        dispatch(loadCountries(response.data))
        if (response.error) {
            console.error(response.error)
        }
    }
}