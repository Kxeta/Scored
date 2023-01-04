import { COUNTRY } from "./country"
import { LEAGUE } from "./league"
import { MATCH } from "./match"
import { SEASON } from "./season"
import { STAGE } from "./stage"
import { TEAM } from './team';

export type COUNTRY_STORE = {
    loading: boolean,
    list: COUNTRY[]
}

export type LEAGUE_STORE = {
    loading: boolean,
    list: LEAGUE[]
}

export type MATCH_STORE = {
    loading: boolean,
    list: MATCH[]
}

export type MATCH_DETAIL_STORE = {
    loading: boolean,
    list: {[id: number]: MATCH}
}

export type SEASON_STORE = {
    loading: boolean,
    list: SEASON[]
}

export type STAGE_STORE = {
    loading: boolean,
    list: STAGE[]
}

export type TEAM_STORE = {
    loading: boolean,
    list: TEAM[]
}

export type SELECTED_STORE = {
    country: number,
    league: number,
    match: number,
    season: number,
    stage: number,
    team: number,
}

export type STORE = {
    country: COUNTRY_STORE,
    league: LEAGUE_STORE,
    match: MATCH_STORE,
    matchDetail: MATCH_DETAIL_STORE,
    season: SEASON_STORE,
    selected: SELECTED_STORE,
    stage: STAGE_STORE,
    team: TEAM_STORE
}