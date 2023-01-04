import { SEASON } from '../types/season';
import { COUNTRY } from '../types/country';
import { LEAGUE } from '../types/league';
import { STAGE } from '../types/stage';
import { TEAM } from '../types/team';
import { MATCH } from '../types/match';

const API_KEY_VALUE = 'ba9952c0-8bc2-11ed-bfc1-09bf89d468f2'
const BASE_URL = 'https://app.sportdataapi.com/api/v1'
const SOCCER_SERVICE = 'soccer'
const API_KEY_QUERY_STRING = 'apikey'

export enum CONTINENTS {
    AFRICA = 'Africa',
    ASIA = 'Asia',
    EUROPE = 'Europe',
    OCEANIA = 'Oceania',
    NORTH_AMERICA = 'North America',
    SOUTH_AMERICA = 'South America'
}

export const MATCH_STATUS = {
    0: {
        name: 'not started',
        description: 'The event has not started'
    },
    1: {
        name: 'Inplay',
        description: 'The event is inplay'
    },
    11: {
        name: 'Half-time',
        description: 'The event is in half-time'
    },
    12: {
        name: 'Extra-time',
        description: 'The event is in extra time'
    },
    13: {
        name: 'Penalties',
        description: 'The event is in penalties because extra time didn\'t determinate a winner.'
    },
    14: {
        name: 'Break-time',
        description: 'Event is in break waiting for extra time or penalties.'
    },
    15: {
        name: 'Awarding',
        description: 'Awarding of a victory to a contestant because there are no other contestants.'
    },
    2: {
        name: 'Update Later',
        description: 'Event will be updated later.'
    },
    3: {
        name: 'Ended',
        description: 'Event has ended after 90 minutes.'
    },
    31: {
        name: 'After penalties',
        description: 'Event has ended after penalty shootout.'
    },
    32: {
        name: 'After Extra-time',
        description: 'The event has finished after extra time.'
    },
    4: {
        name: 'Postponed',
        description: 'The event has been Postponed.'
    },
    5: {
        name: 'Cancelled',
        description: 'The event has been Cancelled.'
    },
    6: {
        name: 'Abandoned',
        description: 'The event has abandoned and will continue at a later time or day.'
    },
    7: {
        name: 'Interrupted',
        description: 'The event has been interrupted. Can be due to bad weather for example.'
    },
    8: {
        name: 'Suspended',
        description: 'The event has been suspended.'
    },
    9: {
        name: 'Awarded',
        description: 'Winner is beeing decided externally.'
    },
    10: {
        name: 'Delayed',
        description: 'The event is delayed.'
    },
    17: {
        name: 'To be announced',
        description: 'The event has not been verified yet.'
    },
}

/**
 * This function will fetch the countries list from the API.
 * It can have a continent key, but it was not used in this project yet.
 * @param continentKey - Optional
 * @returns Promise
 */
export const fetchCountries = async (continentKey: keyof typeof CONTINENTS | null): Promise<{data: COUNTRY[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/countries`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    if (continentKey) url.searchParams.append('continent', CONTINENTS[continentKey])

    try {
        const response = await fetch(url).then(result => result.json())
        return {
            data: response.data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 * This function will fetch the leagues list from the API based on the country id
 * @param countryId 
 * @returns Promise
 */
export const fetchLeagues = async (countryId: number): Promise<{data: LEAGUE[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/leagues`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    url.searchParams.append('country_id', countryId.toString())

    try {
        const response = await fetch(url).then(result => result.json())
        /* The leagues API returns a single JSON object and not an Array of JSON objects
         e.g.:
            "data":{
                "313":{
                    "league_id":314,
                    "country_id":48,
                    "name":"Bundesliga"
                },
                "314":{
                    "league_id":315,
                    "country_id":48,
                    "name":"2. Bundesliga"
                },
            }
            So in order to keep how these functions work normalized (returning arrays), we will loop through the results and push them
            into an array.
        */
        const data: LEAGUE[] = []
        for (let key in response.data) {
            data.push(response.data[key])
        }
        return {
            data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 *  This function will fetch the seasons list from the API based on the league id
 * @param leagueId 
 * @returns Promise
 */
export const fetchSeasons = async (leagueId: number): Promise<{data: SEASON[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/seasons`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    url.searchParams.append('league_id', leagueId.toString())

    try {
        const response = await fetch(url).then(result => result.json())
        return {
            data: response.data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 * This function will fetch the stages list from the API based on the season id.
 * This service was not used in this project yet.
 * @param seasonId 
 * @returns Promise
 */
export const fetchStages = async (seasonId: number): Promise<{data: STAGE[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/stages`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    url.searchParams.append('season_id', seasonId.toString())

    try {
        const response = await fetch(url).then(result => result.json())
        return {
            data: response.data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 *  This function will fetch the teams list from the API based on the country id
 * @param countryId 
 * @returns Promise
 */
export const fetchTeams = async (countryId: number): Promise<{data: TEAM[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/teams`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    url.searchParams.append('country_id', countryId.toString())

    try {
        const response = await fetch(url).then(result => result.json())
        return {
            data: response.data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 * This function will fetch the matches list from the API based on the following filters.
 * The filters for status code or dates were not used in this project yet.
 * @param seasonId 
 * @param statusCode 
 * @param dateFrom 
 * @param dateTo 
 * @returns Promise
 */
export const fetchMatches = async (seasonId: number, statusCode: number | null, dateFrom: string | null, dateTo: string | null): Promise<{data: MATCH[], error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/matches`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)
    url.searchParams.append('season_id', seasonId.toString())
    if (statusCode) url.searchParams.append('status_code', statusCode.toString())
    if (dateFrom) url.searchParams.append('date_from', dateFrom)
    if (dateTo) url.searchParams.append('date_to', dateTo)

    try {
        const response = await fetch(url).then(result => result.json())
        /* The matches API returns a single JSON object and not an Array of JSON objects
            e.g.:
            "data":{
                "1":{
                    "match_id":139415,
                    "status_code":3,
                    "status":"finished",
                    "match_start":"2020-09-19 15:30:00",
                    "league_id":314,
                    "season_id":496,
                    "home_team":{
                        "team_id":3993,
                        "name":"1. FC Union Berlin",
                        "short_code":"UNI",
                        "logo":"/soccer/teams/100/2819.png",
                        "country":{
                        "country_id":48,
                        "name":"Germany",
                        "country_code":"de",
                        "continent":"Europe"
                        }
                    },
                    "away_team":{
                        "team_id":4075,
                        "name":"FC Augsburg",
                        "short_code":"FCA",
                        "logo":"/soccer/teams/100/2814.png",
                        "country":{
                        "country_id":48,
                        "name":"Germany",
                        "country_code":"de",
                        "continent":"Europe"
                        }
                    },
                    "stats":{
                        "home_score":1,
                        "away_score":3,
                        "ht_score":"0-1",
                        "ft_score":"1-3",
                        "et_score":null,
                        "ps_score":null
                    },
                    "venue":{
                        "venue_id":1870,
                        "name":"An der alten Forsterei",
                        "capacity":22012,
                        "city":"Berlin",
                        "country_id":48
                    }
                },
            }
            So in order to keep how these functions work normalized (returning arrays), we will loop through the results and push them
            in
        */
        const data: MATCH[] = []
        for (let key in response.data) {
            data.push(response.data[key])
        }
        return {
            data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: [],
            error: e
        }
    }
}

/**
 * This function will fetch the match details from the API based on the match id
 * @param matchId 
 * @returns Promise
 */
export const fetchMatch = async (matchId: number): Promise<{data: MATCH | {}, error: unknown}> => {
    const url = new URL (`${BASE_URL}/${SOCCER_SERVICE}/matches/${matchId}`);
    url.searchParams.append(API_KEY_QUERY_STRING, API_KEY_VALUE)

    try {
        const response = await fetch(url).then(result => result.json())
        return {
            data: response.data,
            error: null
        }

    } catch (e: unknown) {
        return {
            data: {},
            error: e
        }
    }
    
}