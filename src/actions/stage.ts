import { STAGE } from '../types/stage';
export const types = {
    FETCHING_STAGES: 'FETCHING_STAGES',
    LOAD_STAGES: 'LOAD_STAGES'
}

export const fetchingStages = () => ({
    type: types.FETCHING_STAGES
})

export const loadStages = (stages: STAGE[]) => ({
    type: types.LOAD_STAGES,
    payload: stages
})