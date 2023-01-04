export const types = {
    SELECT_COUNTRY: 'SELECT_COUNTRY',
    SELECT_LEAGUE: 'SELECT_LEAGUE',
    SELECT_MATCH: 'SELECT_MATCH',
    SELECT_SEASON: 'SELECT_SEASON',
    SELECT_STAGE: 'SELECT_STAGE',
    SELECT_TEAM: 'SELECT_TEAM',
}

export type SELECTED_FIELD = 'country' | 'league' | 'match' | 'season' | 'stage' | 'team'
/**
 * Returns the correct field action to be stored as selected by the dropdowns
 * @param field 
 * @param id 
 * @returns Action
 */
export const selectField = (field: SELECTED_FIELD, id: number) => {
    let type = ''
    switch(field) {
        case 'country':
            type = types.SELECT_COUNTRY;
            break;
        case 'league':
            type = types.SELECT_LEAGUE;
            break;
        case 'match':
            type = types.SELECT_MATCH;
            break;
        case 'season':
            type = types.SELECT_SEASON;
            break;
        case 'stage':
            type = types.SELECT_STAGE;
            break;
        case 'team':
            type = types.SELECT_TEAM;
            break;
        default:
            return
    }
    return {
        type,
        payload: id
    }
}