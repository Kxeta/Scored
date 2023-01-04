import React from 'react'
import PropTypes from 'prop-types'
import { MATCH, MATCH_EVENTS } from '../../types/match'
import MatchEvent from '../match-event'

import './styles.css'

const propTypes = {
    match: PropTypes.object.isRequired,
}
/**
 * FC that renders the details of a match based on the match's info passed as a prop.
 * This is used inside a modal
 * @param props 
 * @returns 
 */
function ModalContent(props: PropTypes.InferProps<typeof propTypes>) {
    const match = props.match as MATCH
  return (
    <>
        <div className='game-details-modal-header'>
                <div className='team-header'>
                    <img className='team-header-logo' src={match.home_team.logo} alt={match.home_team.name} />
                    <h2 className='team-name'>{match.home_team.name}</h2>
                </div>
                <div className='game-result-header'>
                    <h2 className='full-time-result'>{match.stats.ft_score || '0-0'}</h2>
                    <p className='half-time-result'>({match.stats.ht_score || '0-0'})</p>
                </div>
                <div className='team-header'>
                    <img className='team-header-logo' src={match.away_team.logo} alt={match.away_team.name} />
                    <h2 className='team-name'>{match.away_team.name}</h2>
                </div>
            </div>

        {match.match_events?.map((matchEvent: MATCH_EVENTS) => 
            <MatchEvent 
                minute={matchEvent.minute}
                eventType={matchEvent.type}
                playerName={matchEvent.player_name}
                homeTeamEvent={matchEvent.team_id === match.home_team.team_id}
                relatedPlayerName={matchEvent.related_player_name}
                result={matchEvent.result}
                ownGoal={matchEvent.own_goal}
            />
        )}
    </>
  )
}

ModalContent.propTypes = {}

export default ModalContent
