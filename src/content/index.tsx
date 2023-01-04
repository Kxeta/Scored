import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux'
import { fetchingMatchDetails, fetchMatchInfoData } from '../actions/matchDetail';
import GameCard from '../components/game-card';
import { MATCH } from '../types/match';
import { MATCH_STORE, MATCH_DETAIL_STORE, STORE, SELECTED_STORE } from '../types/store';
import { TEAM } from '../types/team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

import './styles.css'
import ModalContent from '../components/modal-content';

type PROPS = {
    match: MATCH_STORE,
    matchDetail: MATCH_DETAIL_STORE,
    selected: SELECTED_STORE,
    fetchMatchInfoData: Function,
    fetchingMatchDetails: Function
}

type STATE = {
    matchesList: GAME_CARD_ITEM[],
    openModal: boolean,
    matchIdSelected: number
}

export type GAME_CARD_ITEM = {
    matchId: number
    homeTeam: TEAM
    awayTeam: TEAM
    date: string
    status: string
    stadium: string
    htScore: string
    ftScore: string
}
/**
 * Class component that renders all the main content of the page, based on the filters selected on the Header component
 * This component is responsible to show a list of game cards and also to show a modal when the user clicks on a game card
 * to see more details about that match
 */
export class ContentList extends Component<PROPS, STATE> {

    constructor(props: PROPS) {
        super(props)
        this.state = {
            matchesList: [],
            openModal: false,
            matchIdSelected: 0
        }
    }

    normalizeMatchesToGameCard = (matches: MATCH[]): GAME_CARD_ITEM[] => {
        if (!Array.isArray(matches)) return [];
        return matches.filter((match: MATCH) => {
            // If we have a team selected, we filter by it
            if (this.props.selected.team !== 0) {
                return (
                    match.home_team.team_id === this.props.selected.team ||
                    match.away_team.team_id === this.props.selected.team
                )
            } else {
                return true
            }
        }).map((match: MATCH) => ({
            matchId: match.match_id,
            homeTeam: match.home_team,
            awayTeam: match.away_team,
            date: match.match_start_iso,
            status: match.status,
            stadium: match.venue?.name || '',
            htScore: match.stats.ht_score || '0-0',
            ftScore: match.stats.ft_score || '0-0'
        }))
    }

    componentDidUpdate(prevProps: Readonly<PROPS>): void {
        if (JSON.stringify(prevProps.match.list) !== JSON.stringify(this.props.match.list) &&
            !this.props.match.loading) {
            this.setState({
                matchesList: this.normalizeMatchesToGameCard(this.props.match.list)
            })
        }
        if (JSON.stringify(prevProps.matchDetail.list) !== JSON.stringify(this.props.matchDetail.list) &&
            !this.props.matchDetail.loading) {
            this.setState({
                openModal: true
            })
        }
    }

    renderGameCard(match: GAME_CARD_ITEM) {
        return <GameCard 
            key={match.matchId}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            date={match.date}
            status={match.status}
            stadium={match.stadium}
            htScore={match.htScore}
            ftScore={match.ftScore}
            onClick={() => this.handleOpenModal(match.matchId)}
        />
    }

    handleOpenModal(matchId: number) {
        debugger;
        this.setState({matchIdSelected: matchId})
        if (this.props.matchDetail.list[matchId]) {
            this.setState({openModal: true})
        } else {
            this.props.fetchingMatchDetails()
            this.props.fetchMatchInfoData(matchId)
        }
    }

    handleCloseModal() {
        this.setState({openModal: false, matchIdSelected: 0})
    }

    renderModalGameDetails () {
        return <Modal
            isOpen={this.state.openModal && this.state.matchIdSelected > 0}
            onRequestClose={() => this.handleCloseModal()}
            className="game-details-modal"
            overlayClassName="game-details-modal-overlay">
                
            {this.props.matchDetail.loading && <FontAwesomeIcon icon={faSpinner}/>}
            {this.state.matchIdSelected && <ModalContent match={this.props.matchDetail.list[this.state.matchIdSelected]} />}
        </Modal>
    }

    render() {
        return (
                <div className='matches-list-wrapper'>
                    {this.props.match.loading && <FontAwesomeIcon icon={faSpinner}/>}
                    {this.state.matchesList.map((match: GAME_CARD_ITEM) => 
                        this.renderGameCard(match)
                    )}
                    {this.renderModalGameDetails()}
                </div>
        )
    }
}

const mapStateToProps = (state: STORE) => ({
    match: state.match,
    matchDetail: state.matchDetail,
    selected: state.selected,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchMatchInfoData: (matchId: number) => dispatch(fetchMatchInfoData(matchId)),
        fetchingMatchDetails: () => dispatch(fetchingMatchDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)