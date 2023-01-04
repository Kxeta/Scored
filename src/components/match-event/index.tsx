import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faFutbol, faSuitcaseMedical, faSquare } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const propTypes = {
    minute: PropTypes.number.isRequired,
    eventType: PropTypes.string.isRequired,
    playerName: PropTypes.string.isRequired,
    relatedPlayerName: PropTypes.string,
    homeTeamEvent: PropTypes.bool.isRequired,
    result: PropTypes.string,
    ownGoal: PropTypes.bool,
}
export const MATCH_EVENT_TYPES = {
    GOAL: 'goal',
    YELLOW_CARD: 'yellowcard',
    RED_CARD: 'redcard',
    SUBS: 'substitution',
    INJURY: 'injury'
}

/**
 * FC that renders a match event based on match's event info passed as a prop.
 * It aligns the events based on home team event (left) or away team event (right)
 * @param props 
 * @returns 
 */
function MatchEvent(props: PropTypes.InferProps<typeof propTypes>) {

    const renderGoal = () => {
        return <>
            <FontAwesomeIcon icon={faFutbol}/>
            <p>{props.playerName}
            {props.ownGoal ? <span>(OG)</span> : ''}
            {props.relatedPlayerName &&
                <span>- Ass: {props.relatedPlayerName}</span>
            }
            </p>
        </>
    }

    const renderCard = (isRed: boolean = false) => {
        return <>
            <FontAwesomeIcon icon={faSquare} className={isRed ? 'red-card' : 'yellow-card'}></FontAwesomeIcon>
            <p>{props.playerName}</p>
        </>
    }

    const renderSubs = () => {
        return <>
            <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
            <p><span>OUT:</span>{props.playerName}<span>/</span><span>IN:</span>{props.relatedPlayerName}</p>
        </>
    }

    const renderInjury = () => {
        return <>
            <FontAwesomeIcon icon={faSuitcaseMedical}/>
            <p>{props.playerName}</p>
        </>
    }

    const renderEvent = () => {
        switch(props.eventType) {
            case MATCH_EVENT_TYPES.GOAL:
                return renderGoal()
            case MATCH_EVENT_TYPES.YELLOW_CARD:
                return renderCard()
            case MATCH_EVENT_TYPES.RED_CARD:
                return renderCard(true)
            case MATCH_EVENT_TYPES.SUBS:
                return renderSubs()
            case MATCH_EVENT_TYPES.INJURY:
                return renderInjury()
            default:
                return <></>
        }
    }
    return (
        <div className='match-event-wrapper'>
            <div className='match-event-time'>
                <p>
                    {props.minute}'
                </p>
            </div>
            <div className='match-event-description event-home'>
                {props.homeTeamEvent && renderEvent()}
            </div>
            <div className='match-event-description event-result'>
                {props.result && <p>{props.result}</p>}
            </div>
            <div className='match-event-description event-away'>
                {!props.homeTeamEvent && renderEvent()}

            </div>
        </div>
    )
}

MatchEvent.propTypes = propTypes

export default MatchEvent
