import { combineReducers } from "redux";
import { country } from './country'
import { league } from './league'
import { match } from './match'
import { season } from './season'
import { selected } from "./selectedFilters";
import { stage } from './stage'
import { team } from './team'
import { matchDetail } from './matchDetail';

export default combineReducers({
    country,
    league,
    match,
    matchDetail,
    season,
    selected,
    stage,
    team
})