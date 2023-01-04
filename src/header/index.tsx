import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux'
import { fetchCountriesData } from '../actions/country';
import Dropdown from '../components/dropdown'
import { STORE, COUNTRY_STORE, LEAGUE_STORE, SEASON_STORE, TEAM_STORE, SELECTED_STORE } from '../types/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { COUNTRY } from '../types/country';
import { LIST_ITEM } from '../components/dropdown/index';
import { SELECTED_FIELD, selectField } from '../actions/selectedFilters';
import { LEAGUE } from '../types/league';
import { SEASON } from '../types/season';
import { TEAM } from '../types/team';
import { fetchLeaguesData } from '../actions/league';
import { fetchSeasonsData } from '../actions/season';

import './styles.css';
import { fetchTeamsData } from '../actions/team';
import { fetchingMatches, fetchMatchesData } from '../actions/match';

type PROPS = {
    country: COUNTRY_STORE,
    league: LEAGUE_STORE,
    season: SEASON_STORE,
    selected: SELECTED_STORE,
    team: TEAM_STORE,
    fetchCountriesData: Function,
    fetchLeaguesData: Function,
    fetchSeasonsData: Function,
    fetchTeamsData: Function,
    fetchMatchesData: Function,
    fetchingMatches: Function,
    selectField: Function
}

type STATE = {
    countriesList: LIST_ITEM[],
    leaguesList: LIST_ITEM[],
    seasonsList: LIST_ITEM[],
    teamsList: LIST_ITEM[]
}

/**
 * Class component that's responsible to rendering the Header of the web page.
 * It will render all the dropdowns to be used as a filter for the list of matches rendered on the Content component
 */
export class Header extends Component<PROPS, STATE> {

    constructor(props: PROPS) {
        super(props)
        this.state = {
            countriesList: [],
            leaguesList: [],
            seasonsList: [],
            teamsList: []
        }
    }

    componentDidMount(): void {
        if (!this.props.country.list.length) this.props.fetchCountriesData()
    }

    normalizeCountriesToDropdown = (countries: COUNTRY[]): LIST_ITEM[] => {
        if (!Array.isArray(countries)) return [];
        return countries.map((country: COUNTRY) => ({
            id: country.country_id,
            label: country.name,
            img: null,
        }))
    }

    normalizeLeaguesToDropdown = (leagues: LEAGUE[]): LIST_ITEM[] => {
        if (!Array.isArray(leagues)) return [];
        return leagues.map((league: LEAGUE) => ({
            id: league.league_id,
            label: league.name,
            img: null,
        }))
    }

    normalizeSeasonToDropdown = (seasons: SEASON[]): LIST_ITEM[] => {
        if (!Array.isArray(seasons)) return [];
        return seasons.filter((season: SEASON) => !!season.name).map((season: SEASON) => ({
            id: season.season_id,
            label: season.name,
            img: null,
        }))
    }

    normalizeTeamsToDropdown = (teams: TEAM[]): LIST_ITEM[] => {
        if (!Array.isArray(teams)) return [];
        return teams.map((team: TEAM) => ({
            id: team.team_id,
            label: team.name,
            img: team.logo,
        }))
    }

    componentDidUpdate(prevProps: Readonly<PROPS>): void {
        // Normalize country list to dropdown
        if (JSON.stringify(prevProps.country.list) !== JSON.stringify(this.props.country.list) &&
            !this.props.country.loading) {
            this.setState({
                countriesList: this.normalizeCountriesToDropdown(this.props.country.list)
            })
        }
        // Normalize league list to dropdown
        if (JSON.stringify(prevProps.league.list) !== JSON.stringify(this.props.league.list) &&
            !this.props.league.loading) {
            this.setState({
                leaguesList: this.normalizeLeaguesToDropdown(this.props.league.list)
            })
        }
        // Normalize season list to dropdown
        if (JSON.stringify(prevProps.season.list) !== JSON.stringify(this.props.season.list) &&
            !this.props.season.loading) {
            this.setState({
                seasonsList: this.normalizeSeasonToDropdown(this.props.season.list)
            })
        }
        // Normalize team list to dropdown
        if (JSON.stringify(prevProps.team.list) !== JSON.stringify(this.props.team.list) &&
            !this.props.team.loading) {
            this.setState({
                teamsList: this.normalizeTeamsToDropdown(this.props.team.list)
            })
        }

        // Fetch league and team list after country is selected
        if(prevProps.selected.country !== this.props.selected.country) {
            this.props.selectField('league', 0)
            this.props.selectField('team', 0)
            this.props.fetchLeaguesData(this.props.selected.country)
            this.props.fetchTeamsData(this.props.selected.country)
        }

        // Fetch season list after league is selected
        if(prevProps.selected.league !== this.props.selected.league) {
            this.props.selectField('season', 0)
            this.props.fetchSeasonsData(this.props.selected.league)
        }
    }

    handleSelectField = (field: SELECTED_FIELD, id: number): void => {
        // Set the new value for the field
        this.props.selectField(field, id)
    }

    handleFetchMatches = () => {
        this.props.fetchingMatches()
        this.props.fetchMatchesData(this.props.selected.season)
    }

    handleSwtichTheme = () => {
        document.body.classList.toggle("dark");
    }

    render() {
        return (<>
        <h1 className='filter-title'>SCORED!</h1>
        <div className='switch-theme' onClick={() => this.handleSwtichTheme()} >
            <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <div className='filter-wrapper'>
            <div className='filter'>
                <Dropdown 
                    placeholder={'Select your country'}
                    list={this.state.countriesList}
                    onSelect={(id: number) => this.handleSelectField('country', id)}/>
                {this.props.country.loading && <FontAwesomeIcon icon={faSpinner}/>}
            </div>
            <div className='filter'>
                <Dropdown
                    placeholder={'Select your league'}
                    list={this.state.leaguesList}
                    clear={this.props.selected.league === 0}
                    disabled={this.props.selected.country === 0}
                    onSelect={(id: number) => this.handleSelectField('league', id)} />
                {this.props.league.loading && <FontAwesomeIcon icon={faSpinner}/>}
            </div>
            <div className='filter'>
                <Dropdown
                    placeholder={'Select your team'}
                    list={this.state.teamsList}
                    clear={this.props.selected.team === 0}
                    disabled={this.props.selected.country === 0}
                    onSelect={(id: number) => this.handleSelectField('team', id)} />
                {this.props.team.loading && <FontAwesomeIcon icon={faSpinner}/>}
            </div>
            <div className='filter'>
                <Dropdown
                    placeholder={'Select your season'}
                    list={this.state.seasonsList}
                    clear={this.props.selected.season === 0}
                    disabled={this.props.selected.league === 0}
                    onSelect={(id: number) => this.handleSelectField('season', id)} />
                {this.props.season.loading && <FontAwesomeIcon icon={faSpinner}/>}
            </div>
            <div className='button-wrapper'>
                <button onClick={() => this.handleFetchMatches()} disabled={this.props.selected.season === 0}>GO!</button>
            </div>
        </div>
        </>
        )
    }
}

const mapStateToProps = (state: STORE) => ({
    country: state.country,
    league: state.league,
    season: state.season,
    selected: state.selected,
    team: state.team
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchCountriesData: () => dispatch(fetchCountriesData()),
        fetchLeaguesData: (countryId: number) => dispatch(fetchLeaguesData(countryId)),
        fetchSeasonsData: (leagueId: number) => dispatch(fetchSeasonsData(leagueId)),
        fetchTeamsData: (countryId: number) => dispatch(fetchTeamsData(countryId)),
        fetchMatchesData: (seasonId: number) => dispatch(fetchMatchesData(seasonId)),
        fetchingMatches: () => dispatch(fetchingMatches()),
        selectField: (field: SELECTED_FIELD, id: number) => dispatch(selectField(field, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)