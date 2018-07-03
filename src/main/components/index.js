import { connect } from 'react-redux';
import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import {
    PlayerFilters,
    fetchPlayers,
    getVisiblePlayers,
    filterPlayersBy,
    PlayersTable
} from '../../playerFinder';
import {filters} from "../../assignmentConstants";
import Toolbar from "./toolbar";

class Index extends React.Component{

  componentWillMount(){
      this.props.dispatch(fetchPlayers);
  }

  render() {
    const { players, dispatch} = this.props;

    return (
      <div className="players-app">
        <Toolbar/>
        <PlayerFilters
            filters={filters}
            filterPlayersBy={(name,value) => dispatch(filterPlayersBy(name,value))}
        />
        <PlayersTable players={players}/>
      </div>
    );
  }
}
export default connect(
    createStructuredSelector({
        players: getVisiblePlayers
    })
)(Index);