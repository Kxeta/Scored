import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { TEAM } from '../../types/team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const propTypes = {
    homeTeam: PropTypes.object.isRequired,
    awayTeam: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    stadium: PropTypes.string.isRequired,
    htScore: PropTypes.string.isRequired,
    ftScore: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

/**
 * FC that renders a game card based on the match's info passed as a prop.
 * @param props 
 * @returns 
 */
function GameCard(props: PropTypes.InferProps<typeof propTypes>) {

    const renderTeam = (team: TEAM) => {
        return <div className='game-card-team'>
        {team.logo && <img src={team.logo} alt={team.name}/>}
        <p>{team.name}</p>
    </div>
    }

    const [homeTeamHalftimeScore, awayTeamHalftimeScore] = props.htScore.split('-')
    const [homeTeamFulltimeScore, awayTeamFulltimeScore] = props.ftScore.split('-')

    const handleOnClick = () => {
        if (!props.onClick) return
        props.onClick()
    }

  return (
    <div className='game-card-wrapper' onClick={() => handleOnClick()}>
        <p className='game-card-status'>{props.status.toUpperCase()}</p>
        <div className='game-card-teams'>
            {renderTeam(props.homeTeam as TEAM)}
            {renderTeam(props.awayTeam as TEAM)}
        </div>
        <div className='game-card-result'>
            <p>{homeTeamFulltimeScore} <span>({homeTeamHalftimeScore})</span></p>
            <p>{awayTeamFulltimeScore} <span>({awayTeamHalftimeScore})</span></p>
        </div>
        <div className='game-card-details'>
            <div className='game-card-details-content'>
                <FontAwesomeIcon icon={faCalendarDays} />
                <Moment format="D MMM YYYY-HH:MM">{props.date}</Moment>
            </div>
            <div className='game-card-details-content'>
                <FontAwesomeIcon icon={faLocationPin} />
                <p>{props.stadium}</p>
            </div>
        </div>
    </div>
  )
}

GameCard.propTypes = propTypes

export default GameCard
